import PulseLoader from "react-spinners/PulseLoader";

interface Props {
  loading: boolean;
}

const Loader: React.FC<Props> = ({ loading }) => {
  return (
    <div className={loading ? "loader" : undefined}>
      <PulseLoader
        loading={loading}
        color="#ffff"
        size={20}
        //timeout={1000} //3 secs
      />
    </div>
  );
};

export default Loader;
