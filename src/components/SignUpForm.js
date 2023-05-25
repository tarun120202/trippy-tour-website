import "./SignUpFormStyles.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1>Register yourself!!!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
