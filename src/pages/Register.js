import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import Navbar from '../components/layout/Navbar';
import { register } from '../actions/userActions';

const Register = (props) => {
  // Form State
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPAssword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = useState(true);
  const [checkPassword, setcheckPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  // Get the user info from redux
  const userRegister = useSelector((state) => state.userRegister);
  // destructuring the variable
  const { loading, userInfo, error } = userRegister;

  // redirect condition
  // const redirect = props.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/';
  useEffect(() => {
    if (userInfo) {
      history.push('/login');
    }
    return () => {
      //
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  // Submit register data
  const onSubmit = (e) => {
    setVisible(true);
    setcheckPassword(false);
    const data = {
      firstName: first,
      lastName: last,
      email,
      password,
      username,
      address,
      phone,
      country,
    };
    if (password.trim() !== confirmPassword.trim()) {
      setcheckPassword(true);
      setPasswordMessage('Password not match');
      e.preventDefault();
    } else {
      // dispatch function in the folder of userAction.js
      dispatch(register(data));
      e.preventDefault();
    }
  };

  // Alert dismiss function
  const onDismiss = () => setVisible(!visible);

  return (
    <>
      <Navbar />
      <section className="singup">
        <div className="overlay-login">
          <div className="container">
            <div className="login-grid">
              <div className="rigister-flex">
                {loading && <h1>Loading</h1>}
                {error && (
                  <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {error}
                  </Alert>
                )}
                {checkPassword && (
                  <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {passwordMessage}
                  </Alert>
                )}
                <form>
                  <div className="form-group">
                    <label htmlFor="first">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="first"
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last">last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="last"
                      value={last}
                      onChange={(e) => setLast(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      name="username"
                      aria-describedby="emailHelp"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Phone">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (Option)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPAssword(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confimPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confimPassword"
                      name="confimPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-block"
                    onClick={onSubmit}
                  >
                    {' '}
                    Singup
                  </button>
                </form>
                <p className="mt-4 text-dark">
                  Already have account{' '}
                  <Link className="text-warning" to="/Login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
