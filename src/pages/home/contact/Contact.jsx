import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className="text-[25px]">Contact</h1>
      <p className="text-[15px] mt-10">
        I'm currently looking to join a cross-functional team that values
        improving people's lives <br /> through code by amazing thoughts. or
        have a project in mind? Let's connect.
      </p>
      <h5 className="text-[15px] mt-10">salmanfarsi9005@gmail.com</h5>

      {/* Social Icons */}
      <div className={`flex gap-4 mt-10`}>
        <FaInstagram />
        <FaLinkedin />
        <FaGoogle />
      </div>
    </div>
  );
};

export default Contact;
