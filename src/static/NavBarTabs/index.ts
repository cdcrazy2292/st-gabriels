import { NavItem } from "../../components/Navbar/types/commonTypes"

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Worship",
    children: [
      {
        label: "Mass Schedule",
        subLabel: "Receive the sacrament of the Eucharist",
        href: "#",
      },
      {
        label: "Confessions",
        subLabel: "Receive the Sacrament of Penance",
        href: "#",
      },
      {
        label: "Spiritual Guidance",
        subLabel: "Establish a relationship with the Lord",
        href: "#",
      },
      {
        label: "Online Services",
        subLabel: "Explore our vast library of online resources",
        href: "#",
      },
      {
        label: "Weddings",
        subLabel: "Receive the Sacrament of Matrimony",
        href: "#",
      },
      {
        label: "Funerals",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Ministries",
    children: [
      {
        label: "Religious Education",
        subLabel: "Help your children nurture their faith",
        href: "#",
      },
      {
        label: "Rite of Christian Initiation of Adults",
        subLabel: "Get to know the loving and merciful Father",
        href: "#",
      },
      {
        label: "Neocatechumenal Way",
        subLabel: "Rediscover the love of God through Christian Formation",
        href: "#",
      },
      {
        label: "Grupo de Oración Carismático",
        subLabel: "Jesús es la Luz",
        href: "#",
      },
    ],
  },
  {
    label: "Bulletins",
    href: "#",
  },
  {
    label: "Giving",
    href: "#",
  },
]
