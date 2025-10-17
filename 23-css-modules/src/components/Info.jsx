import './Info.css';
import styles from './Info.module.css';

/*
    {
        "info": "_info_1ufck_1",
        "myOtherButton": "_myOtherButton_1ufck_9"
    }
*/

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from Info</h1>
      <h2>heading in the Info component</h2>
      <button className="myButton">click me</button>
      <button className={styles.myOtherButton}>Click me</button>
    </div>
  );
}

export default Info;
