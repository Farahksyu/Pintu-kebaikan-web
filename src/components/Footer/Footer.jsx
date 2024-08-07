function Footer() {
  return (
    <div className="p-10">
      <div className="flex flex-row justify-between mb-5">
        <div>
          <div>
            <img src="src/assets/icons/logo-mku.png" alt="" />
          </div>
          <h5 className="font-bold">Contact</h5>
          <p>Whatsapp: 0812492939</p>
          <p>Instagram: @loremipsum</p>
          <p>Email: loremipsum@gmail.com</p>
        </div>
        <div>
          <h5 className="font-bold">Layanan</h5>
          <p>Infaq Digital</p>
          <p>Sedekah </p>
          <p>Zakat</p>
          <p>Wakaf</p>
        </div>
        <div>
          <h5 className="font-bold">Lainnya</h5>
          <p>Event</p>
          <p>FAQ</p>
          <p>Gabung Mitra</p>
        </div>
        <div>
          <h5 className="font-bold">Metode Pembayaran</h5>
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
      <div className="flex flex-row justify-between">
        <p>Copyright 2023 MRKR alright reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
        <p>Cookies Settings</p>
      </div>
    </div>
  );
}

export default Footer;
