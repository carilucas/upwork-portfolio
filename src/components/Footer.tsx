
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/carilucas" target="_blank" rel="noopener noreferrer" className="w-1/2 h-1/2">
            <Image src="/assets/github.svg" alt="github" width={24} height={24}/>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/carlos-mora-dev/" target="_blank" rel="noopener noreferrer" className="w-1/2 h-1/2">
            <Image src="/assets/work/tech/linkedin.png" alt="linkedin" width={24} height={24}/>
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Carlos Mora. Rights reserved.</p>
      <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7ad7fbf1ff854720489f406ff/193cc41d91e6d0bd486503094.js");</script>
    </footer>
  )
}
