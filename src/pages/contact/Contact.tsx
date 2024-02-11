

const Contact = () => {
  return (
    <div className="container mx-auto m-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
      <p className="text-lg mb-5 text-center">Have questions or suggestions? Reach out to us!</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-emerald-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-emerald-500" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" rows={5} className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-emerald-500" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded focus:outline-none focus:bg-emerald-500 hover:bg-emerald-600">Send</button>
      </form>
    </div>
  );
};

export default Contact;
