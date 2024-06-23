"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default () => {
  const footerNavs = [
    {
      label: "Entreprise",
      items: [
        {
          href: "/ourServices",
          name: "Nos Services",
        },
        {
          href: "/our-partners",
          name: "Nos partenaires",
        },
        {
          href: "/blogue",
          name: "Blogue",
        },
        {
          href: "/our-team",
          name: "Notre équipe",
        },
        
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/contact-us",
          name: "Nous contacter",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "/formulaire-devaluation",
          name: "Formulaire d'évaluation",
        },
        {
          href: "/visiter",
          name: "Visiter le Canada",
        },
      ],
    },
    {
      label: "A propos",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Confidentialité",
        },
        {
          href: "/a-propos",
          name: "A propos",
        },
      ],
    },
  ];

  return (
    <footer className="text-text-color bg-black px-4 py-5 max-w-full mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <Image
              src="/assets/images/logoo-jj.png"
              className="w-32"
              alt=""
              height={50}
              width={50}
              loading="lazy"
            />
            <p className="leading-relaxed mt-2 text-[15px]">
              L'honnêteté est une priorité chez nous et votre satisfaction est notre défi.
            </p>
            <p className="leading-relaxed mt-2 text-[15px]">
              Faites de vos rêves une réalité !.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block pt-4 pb-2">Restez en contact</label>
            <div className="max-w-sm flex items-center gap-2 border rounded-md p-1">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded p-2.5 outline-none"
              />
              <button className="p-2.5 rounded-md text-text-color bg-primary-color outline-none shadow-md focus:shadow-none sm:px-5">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-primary-color font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    className="hover:underline hover:text-primary-color"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 jj-immigration All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="example-2">
            <li className="icon-content">
              <Link
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                data-social="linkedin"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  // xml:space="preserve"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
              <Link
                href="https://www.facebook.com/profile.php?id=61557544078696&mibextid=ZbWKwL&_rdc=2&_rdr"
                aria-label="Facebook"
                data-social="facebook"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                  // xml:space="preserve"
                >
                  <FaFacebookSquare className="flex justify-center" size={18}/>
                  {/* <path
                    fill="none"
                    d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                  ></path> */}
                </svg>
              </Link>
              <div className="tooltip">Facebook</div>
            </li>
            <li className="icon-content">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                data-social="instagram"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                  // xml:space="preserve"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <Link
                href="https://x.com/"
                aria-label="Youtube"
                data-social="youtube"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                  // xml:space="preserve"
                >
                  <FaXTwitter className="flex justify-center" size={18} />
                </svg>
              </Link>
              <div className="tooltip">X</div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
