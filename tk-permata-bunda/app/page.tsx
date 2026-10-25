import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Image as ImageIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/1.webp"
          alt="TK Permata Bunda Jombang"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            TK Permata Bunda Jombang
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            TK Permata Bunda / KB Permata Bunda / TPA Permata Bunda
          </p>
          <p className="text-lg mb-8">Membangun Generasi Cerdas, Berakhlak Mulia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/ppdb">Daftar PPDB</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white">
              <Link href="/profil">Tentang Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Pendidikan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Pendidikan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Baby Class / TPA</CardTitle>
                <CardDescription>Tempat Penitipan Anak</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Perawatan dan pendidikan anak usia dini dengan penuh kasih sayang</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>KB (Kelompok Bermain)</CardTitle>
                <CardDescription>Playgroup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Bermain sambil belajar untuk mengembangkan potensi anak</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>TK (Taman Kanak-Kanak)</CardTitle>
                <CardDescription>Kindergarten</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Persiapan masuk sekolah dasar dengan pembelajaran menyenangkan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/kegiatan">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                  <CardTitle>Kegiatan Sekolah</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-gray-600">Lihat kegiatan dan acara terbaru</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pengumuman">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <CardTitle>Pengumuman</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-gray-600">Info terbaru dari sekolah</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/galeri">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="text-center">
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 text-purple-600" />
                  <CardTitle>Galeri</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-gray-600">Dokumentasi kegiatan sekolah</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/ppdb">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-blue-200">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-2 text-orange-600" />
                  <CardTitle>PPDB</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-gray-600">Penerimaan Peserta Didik Baru</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
