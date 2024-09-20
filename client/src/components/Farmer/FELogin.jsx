import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import styles from '../Buyer/signup.module.css'; // Import the CSS Module
import Navi from '../Buyer/Navi'
import { toast, ToastContainer } from 'react-toastify';
import img from '../../assets/bgimg.jpeg';

const auth = getAuth(app);

const FELogin = () => {
  const [email, setemail] = useState('');
  const [password, setpass] = useState('');
  const navigate = useNavigate();

  const signinUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        toast.success('Welcome');
        navigate('/farmer');
      });
    } catch (error) {
      // Handle errors here
      toast.error('Error Loging in:', error);
    }
  };

  

  return (
    <>
      <div className={styles.mainvg}>
        <div className={styles.bgimg}>
          <img src={img} alt="" />
          <div className={styles.fade}>
            <div className={styles.headervg}><Navi/></div>
            <div className={styles.boxvg}>
              <div className={styles.containervg}>
                <div className={styles.heading}>
                  <h1>Login as Farmer</h1>
                </div>
                <div className={styles.formvg}>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    className={styles.i1}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpass(e.target.value)}
                    value={password}
                    className={styles.i1}
                  />
                  <div className={styles.btn}>
                    <button onClick={signinUser} className={styles.bt1}>Login</button>
                  </div>
                  <p className={styles.p1}>
                    Don&apos;t have an account?{' '}
                    <a onClick={() => navigate('/farmersignup')} className={styles.a1}>Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default FELogin;
