"use client"

import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [year, setYear] = useState(2025)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TK Permata Bunda / KB Permata Bunda / TPA Permata Bunda</h3>
            <p className="text-sm mb-2">Naungan Yayasan LPPM Permata Bunda</p>
            <p className="text-sm mb-2">Status: Swasta</p>
            <p className="text-sm">NPSN TK: 69770504 | NPSN KB: 69914172</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Jl. Pattimura No. 33, Sengon, Kec. Jombang, Kab. Jombang, Jawa Timur 61419</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/62321869151" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  +62 321 869151
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4">IG</span>
                <a href="https://instagram.com/permatabundaschooljombang" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  @permatabundaschooljombang
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Program Pendidikan</h3>
            <ul className="space-y-2 text-sm">
              <li>Baby Class / TPA (Tempat Penitipan Anak)</li>
              <li>KB (Kelompok Bermain / Playgroup)</li>
              <li>TK (Kindergarten / Taman Kanak-Kanak)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {year} TK Permata Bunda Jombang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
