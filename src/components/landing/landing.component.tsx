import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="bg-[#3838F3] w-screen h-screen">
        <div className="h-full max-w-7xl m-auto flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-8xl font-bold leading-[114px]">Image Forgery Detection And Classification</h1>
            <h4 className="text-3xl my-11 secondary-text ">Experience The Power of Image Forgery Detection <br />with just a click of a button</h4>
            <Link to={'upload'} className="rounded-lg font-bold text-4xl text-[#6573FB] bg-white p-6">Get Started</Link>
        </div>
        <svg className='absolute right-0 top-28' width="150" height="200" viewBox="0 0 193 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M147.784 119.503L215.994 163.661" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16"/><path d="M133.405 141.713L201.615 185.871" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16"/><path d="M201.615 185.871C204.561 187.778 208.143 188.436 211.574 187.702C215.005 186.968 218.003 184.9 219.91 181.955" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4972 97.8267C14.1335 105.471 17.2595 112.719 21.6968 119.155C26.134 125.592 31.7956 131.091 38.3583 135.34C44.9209 139.589 52.2561 142.503 59.9451 143.917C67.634 145.33 75.5261 145.216 83.1707 143.579C90.8154 141.943 98.0629 138.817 104.499 134.38C110.936 129.942 116.435 124.281 120.684 117.718C124.933 111.156 127.847 103.82 129.261 96.1314C130.674 88.4425 130.56 80.5504 128.923 72.9058C125.619 57.4667 116.316 43.9728 103.062 35.3925C89.8083 26.8122 73.6888 23.8485 58.2498 27.1532C50.6051 28.7895 43.3576 31.9155 36.9211 36.3528C30.4845 40.7901 24.985 46.4516 20.7365 53.0143C16.488 59.5769 13.5736 66.9121 12.1599 74.6011C10.7462 82.29 10.8608 90.1821 12.4972 97.8267Z" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/><path d="M147.784 119.503L133.405 141.713" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/><path d="M140.595 130.608L120.684 117.718" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/><path d="M166.742 131.776L152.363 153.986" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/><path d="M38.3696 92.2887C40.2056 100.866 45.3736 108.363 52.7369 113.129C60.1002 117.896 69.0554 119.543 77.6327 117.707" stroke="#F1F1F1" strokeOpacity="0.97" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <svg className='absolute bottom-20 left-20' width="200" height="200" viewBox="0 0 246 262" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M176.191 211.871C182.387 206.198 187.181 198.631 189.625 189.873C196.57 164.99 182.22 139.529 157.437 132.612C132.654 125.695 107.093 140.017 100.148 164.899C93.2038 189.782 107.554 215.243 132.436 222.188C141.095 224.605 149.951 224.395 158.013 222.032L180.538 261.254L198.234 251.281L176.191 211.871ZM137.992 202.282C124.157 198.421 116.221 184.19 120.054 170.455C123.888 156.72 138.047 148.656 151.881 152.518C165.716 156.379 173.553 170.582 169.72 184.317C165.886 198.052 151.727 206.116 137.992 202.282ZM216.974 170.685L211.5 169.157C210.465 160.178 207.489 151.623 203.012 143.83L208.179 125.317L228.085 130.873L216.974 170.685ZM224.847 65.5997L194.988 57.266L200.544 37.3601L230.402 45.6938C235.682 47.1673 240.16 50.6776 242.851 55.4526C245.542 60.2276 246.226 65.8761 244.753 71.1554L236.419 101.014L216.513 95.4585L224.847 65.5997ZM165.129 48.9324L125.317 37.8208L130.873 17.915L170.685 29.0265L165.129 48.9324ZM71.1553 1.24766L101.014 9.58131L95.4583 29.4872L65.5995 21.1536L57.2659 51.0124L37.36 45.4566L45.6936 15.5978C47.1671 10.3184 50.6775 5.84061 55.4524 3.14944C60.2274 0.458269 65.8759 -0.22582 71.1553 1.24766ZM95.2212 222.53L75.3153 216.974L80.8711 197.068C83.5697 206.618 88.6478 215.331 95.2212 222.53ZM21.1534 180.401L51.0122 188.734L45.4565 208.64L15.5976 200.307C10.3182 198.833 5.84044 195.323 3.14927 190.548C0.458104 185.773 -0.225989 180.124 1.24749 174.845L9.58114 144.986L29.487 150.542L21.1534 180.401ZM37.8207 120.683L17.9148 115.127L29.0263 75.3155L48.9322 80.8712L37.8207 120.683Z" fill="#FAFAFA"/></svg>
    </div>
  )
}

export default Landing