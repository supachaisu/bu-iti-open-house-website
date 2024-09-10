export const navigation = [
  { name: "หน้าแรก", href: "/" },
  { name: "ลงทะเบียน", href: "/registration" },
  { name: "เวิร์คช็อปและกิจกรรม", href: "/workshops-and-activities" },
  { name: "กำหนดการ", href: "/schedule" },
  { name: "วิทยากร", href: "/speakers" },
  { name: "แกลเลอรี่", href: "/gallery" },
  { name: "คำถามที่พบบ่อย", href: "/faq" },
  { name: "ผู้สนับสนุน", href: "/sponsors" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ติดต่อเรา", href: "/contact" },
] as const;

export const navigationMap = new Map(
  navigation.map(({ name, href }) => [name, href])
);
