import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vaishnavi",
          from_email: form.email,
          to_email: "vaishnaviboddula10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center max-container h-screen w-screen bg-gradient-to-br from-white via-white to-white">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 w-full lg:w-1/2 px-8 py-12 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg h-full flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold text-black mb-8">Contact Me</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6"
        >
          <label className="text-lg text-black font-medium">
            Name
            <input
              type="text"
              name="name"
              className="w-full mt-2 p-4 rounded-xl bg-white/10 text-black shadow-lg focus:ring-4 focus:ring-pink-400 outline-none placeholder-black/70"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-lg text-black font-medium">
            Email
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-4 rounded-xl bg-white/10 text-black shadow-lg focus:ring-4 focus:ring-pink-400 outline-none placeholder-black/70"
              placeholder="johndoe@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-lg text-black font-medium">
            Your Message
            <textarea
              name="message"
              rows="5"
              className="w-full mt-2 p-4 rounded-xl bg-white/10 text-black shadow-lg focus:ring-4 focus:ring-pink-400 outline-none placeholder-black/70"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-pink-600 text-black font-bold rounded-xl hover:bg-pink-700 transition-transform transform-gpu hover:scale-105 focus:ring-4 focus:ring-pink-400 focus:outline-none"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full h-full lg:h-auto mt-12 lg:mt-0">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          className="w-full h-full"
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;




