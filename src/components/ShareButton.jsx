function ShareButton() {
  return (
    <button
      onClick={() => {
        const data = localStorage.getItem("scores");
        if (data) {
          const encoded = encodeURIComponent(data);
          const shareUrl = `https://yourdomain.com?data=${encoded}`;
          // WhatsApp
          window.open(`https://wa.me/?text=Check out my Eurovision table! ${shareUrl}`, "_blank");
        }
      }}
      className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center my-auto leading-[95%]">
      Share with WhatsApp
    </button>
  );
}

export default ShareButton;
