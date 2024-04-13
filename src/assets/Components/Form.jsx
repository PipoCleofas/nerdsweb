export default function Form() {
    return (
      <>
        <div className="form-container">
          <h2 id="contactUs">Ready to make your imagination a reality? </h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Price Range" required />
            <input type="text" placeholder="Message" required />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
  