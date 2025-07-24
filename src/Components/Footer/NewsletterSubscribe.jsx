function NewsletterSubscribe() {
    return (
      <div>
        <h1 className="text-black">Subscribe to newsletter </h1>
        <div className="mt-2 shadow-lg shadow-cyan-700/100 ">
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-50 bg-white rounded-l-lg p-2 text-black"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-r-lg p-2 mt-2 w-25"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    );
}
export default NewsletterSubscribe;
