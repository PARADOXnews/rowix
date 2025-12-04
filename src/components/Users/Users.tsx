import Image from "next/image";
import styles from "./Users.module.scss";
import Arrow from "../Arrow/Arrow";

const statsData = [
  { title: "CLIENTS", value: "200+" }, //0
  { title: "PROJECTS", value: "280+" }, // 1
  { title: "HAPPY CLIENTS", value: "100%" }, //2
  { title: "FOLLOWER", value: "420K" }, // 3 
  { title: "Years Of Experience", value: "10+" }, //4
];



export default function Users() {
  return (
    <div className={styles.statsRow}> 
      {statsData.map((item, i) => (  // i iwyeba 0 da midis bolos ramxelac statsData cvladi  aris
        <div key={i} className={`cflex jcc aic `+  styles.statBox}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}

      {/* last box static */}
      <div className={`jcc `+ styles.statBoxLast}>
        <Arrow subHeader="know more" />
      </div>
    </div>
  );
}

