import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">Mastern Investment Management</div>
            <div className="footer__line">
              Website · <a href="http://mastern-e4.kro.kr">mastern-e4.kro.kr</a>
            </div>
          </div>
          <div>
            <div className="footer__label">CONTACT</div>
            <div className="footer__contact">010 9240 5276</div>
            <div className="footer__contact">
              <a href="mailto:hj2784@columbia.edu">hj2784@columbia.edu</a>
            </div>
          </div>
          <div>
            <div className="footer__label">LICENSE</div>
            <div className="footer__license">
              © 2026 Hyeonbin Jung. All rights reserved.
              <br />
              본 자료의 무단 복제 · 배포 · 2차 이용을 금합니다.
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__stamp">Strictly Private and Confidential · 2026</div>
          <div className="footer__stamp footer__stamp--tight">Licensed to Hyeonbin Jung · Team E4</div>
        </div>
      </div>
    </footer>
  );
}
