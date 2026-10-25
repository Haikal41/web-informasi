import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Kontak</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Kontak</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1 text-blue-600" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-gray-600">Jl. Pattimura No. 33, Sengon, Kec. Jombang, Kab. Jombang, Jawa Timur 61419</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 mt-1 text-green-600" />
              <div>
                <p className="font-semibold">Telepon/WhatsApp</p>
                <a href="https://wa.me/62321869151" className="text-sm text-blue-600 hover:underline">+62 321 869151</a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="h-5 w-5 mt-1 text-pink-600 text-center">IG</span>
              <div>
                <p className="font-semibold">Instagram</p>
                <a href="https://instagram.com/permatabundaschooljombang" className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">@permatabundaschooljombang</a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lokasi</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0!2d112.2!3d-7.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzMnMDAiUyAxMTLCsDEyJzAwIkU!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
