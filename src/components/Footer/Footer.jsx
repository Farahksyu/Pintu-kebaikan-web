function Footer() {
  return (
    <div className="p-10">
      <div className="flex flex-row justify-between mb-20">
        <div>
          <div className="h-24 w-24">
            <img src="src/assets/icons/logo-mku.png" alt="" />
          </div>
          <h5 className="font-bold mb-4">Contact</h5>
          <ul className="flex flex-col gap-4">
            <li>Whatsapp: 0812492939</li>
            <li>Instagram: @loremipsum</li>
            <li>Email: loremipsum@gmail.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Layanan</h5>
          <ul className="flex flex-col gap-4">
            <li>Infaq Digital</li>
            <li>Sedekah </li>
            <li>Zakat</li>
            <li>Wakaf</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Lainnya</h5>
          <ul className="flex flex-col gap-4">
            <li>Event</li>
            <li>FAQ</li>
            <li>Gabung Mitra</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Metode Pembayaran</h5>
          <div className="flex flex-row justify-center gap-5 p-2">
            <img src="src/assets/icons/spay.png" alt="" />
            <img src="src/assets/icons/gopay.png" alt="" />
            <img src="src/assets/icons/bni.png" alt="" />
          </div>
          <div className="flex flex-row justify-center gap-5 p-2">
            <img src="src/assets/icons/mandiri.png" alt="" />
            <img src="src/assets/icons/bsi.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between mt-5">
        <p>Copyright 2023 MRKR alright reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
        <p>Cookies Settings</p>
      </div>
    </div>
  );
}

export default Footer;
