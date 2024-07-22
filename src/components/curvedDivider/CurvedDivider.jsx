
import styles from '@/components/curvedDivider/style.module.scss'

export default function CurvedDivider() {
  return (

<div id="divider_id" className={styles.website_divider}>

   <svg xmlns="http://www.w3.org/2000/svg" className={styles.divider_img} viewBox="0 0 1080 137" preserveAspectRatio="none">
  <path d="M 0,137 V 59.03716 c 158.97703,52.21241 257.17659,0.48065 375.35967,2.17167 118.18308,1.69101 168.54911,29.1665 243.12679,30.10771 C 693.06415,92.25775 855.93515,29.278599 1080,73.61449 V 137 Z" style={{opacity:0.85}}></path>
  <path d="M 0,10.174557 C 83.419822,8.405668 117.65911,41.78116 204.11379,44.65308 290.56846,47.52499 396.02558,-7.4328 620.04248,94.40134 782.19141,29.627636 825.67279,15.823104 1080,98.55518 V 137 H 0 Z" style={{opacity:0.5}}></path>
  <path d="M 0,45.10182 C 216.27861,-66.146913 327.90348,63.09813 416.42665,63.52904 504.94982,63.95995 530.42054,22.125806 615.37532,25.210412 700.33012,28.295019 790.77619,132.60682 1080,31.125744 V 137 H 0 Z" style={{opacity:0.25}}></path>
</svg>

</div>
  )
}
 
