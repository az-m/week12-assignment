import Image from "next/image";

export default function RewardRibbon() {
  return (
    <Image
      src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//NecroMedal.png"
      width={80}
      height={100}
      alt="A gold medal with a pink and purple ribbon"
      placeholder="empty"
      loading="lazy"
    />
  );
}
