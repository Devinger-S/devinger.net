
import styles from '@/components/uiverse/tab-toggle/style.module.scss'
import Link from 'next/link'

export default function Toggle() {
  return (
    <>
      <input id="checkbox_toggle" type="checkbox" className={styles.check} ></input>
      <div className={styles.checkbox}>
        <label className={styles.slide} for="checkbox_toggle">
          <label className={styles.toggle} for="checkbox_toggle"></label>
          <label className={styles.text} for="checkbox_toggle"><Link href="/media/photo">Photo</Link></label>


          <Link href="/media/video"><label className={styles.text} for="checkbox_toggle">Video</label>
          </Link>
        </label>
      </div>
    </>
  )
}
