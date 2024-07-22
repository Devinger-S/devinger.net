import styles from '@/components/grainyBackground/style.module.scss'
export default function GrainyBackground() {
  return (
<>

      <div className={styles.noise_bg} ></div>
      <div className={styles.anim_blobs} >
      <div className={styles.blob_1} ></div>
      <div className={styles.blob_2} ></div>
      <div className={styles.blob_3} ></div>
      </div>
    </>
  )
}
