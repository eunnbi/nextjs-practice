import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button.styled";
import { useBack } from "../hooks/useBack";
import styles from "../styles/404.module.scss";

const NotFound = () => {
  const { goBack } = useBack();
  return (
    <>
      <CustomHead title="Not Found!" />
      <main className={styles.main}>
        <h1>Not Found</h1>
        <Button onClick={goBack}>⬅️ Go Back</Button>
      </main>
    </>
  );
};

export default NotFound;
