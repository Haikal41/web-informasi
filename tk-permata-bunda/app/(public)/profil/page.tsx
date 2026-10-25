import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Profil Sekolah</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Identitas Sekolah</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Nama Lembaga:</strong> TK Permata Bunda / KB Permata Bunda / TPA Permata Bunda</p>
            <p><strong>Naungan:</strong> Yayasan LPPM Permata Bunda</p>
            <p><strong>Status:</strong> Swasta</p>
            <p><strong>NPSN TK:</strong> 69770504</p>
            <p><strong>NPSN KB:</strong> 69914172</p>
            <p><strong>Alamat:</strong> Jl. Pattimura No. 33, Sengon, Kec. Jombang, Kab. Jombang, Jawa Timur 61419</p>
            <p><strong>Telepon:</strong> +62 321 869151</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Terwujudnya lembaga pendidikan anak usia dini yang berkualitas, berakhlak mulia, cerdas, kreatif, mandiri dan siap memasuki pendidikan selanjutnya.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Menyelenggarakan pendidikan yang berorientasi pada pembentukan akhlak mulia</li>
              <li>Mengembangkan potensi anak secara menyeluruh (kognitif, afektif, psikomotorik)</li>
              <li>Menciptakan lingkungan belajar yang aman, nyaman dan menyenangkan</li>
              <li>Menumbuhkan kemandirian, kreativitas dan rasa percaya diri anak</li>
              <li>Menjalin kerjasama harmonis dengan orang tua dan masyarakat</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Program Pendidikan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Baby Class / TPA (Tempat Penitipan Anak)</h4>
              <p className="text-sm text-gray-600">Program perawatan dan stimulasi perkembangan anak usia dini</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">KB (Kelompok Bermain / Playgroup)</h4>
              <p className="text-sm text-gray-600">Program bermain sambil belajar untuk mengembangkan sosial, emosi, dan kognitif anak</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">TK (Kindergarten / Taman Kanak-Kanak)</h4>
              <p className="text-sm text-gray-600">Program persiapan sekolah dasar dengan kurikulum yang menyeimbangkan akademik dan karakter</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
