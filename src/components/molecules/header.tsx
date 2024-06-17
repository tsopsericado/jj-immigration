import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FcClock } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="flex justify-center py-3">
        <div className="">
          <ul className="flex gap-3 text-xs">
            <li className="flex gap-2">
              <FaRegEnvelope size={20} />
              <Link
                className="my-auto"
                href="mailto:jjinternationalservcice@gmail.com"
              >
                jjinternationalservcice@gmail.com
              </Link>
            </li>
            <li className="flex gap-2">
              <FaMapMarkerAlt size={20} />
              <p className="my-auto">152 rue Vallières Val-d'Or (Qc) J9P 4L3</p>
            </li>
            <li className="flex gap-2">
              <FcClock size={20} />
              <p className="my-auto">Mon - Sat: 9.00 to 18.00</p>
            </li>
          </ul>
          <div className="top-right">
            <ul className="social-links clearfix">
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557544078696&mibextid=ZbWKwL&_rdc=2&_rdr"
                >
                  <FaFacebookF size={20} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaTwitter size={20} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillInstagram size={20} />
                </Link>
              </li>
            </ul>
            <div className="">
              <form action="/" method="post">
                <div className="">
                  <input
                    type="search"
                    name="search-field"
                    placeholder="Search ..."
                    required
                  />
                  <button type="submit">
                    <i className="icon-8"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="btn-box">
              <Link href="/formulaire-devaluation">
                <span>Formilaire d'évaluation</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
