import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PPDBPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Penerimaan Peserta Didik Baru</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Informasi PPDB</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>TK Permata Bunda / KB Permata Bunda / TPA Permata Bunda membuka pendaftaran peserta didik baru.</p>
            <p><strong>Kontak Panitia:</strong> <a href="https://wa.me/62321869151" className="text-blue-600 hover:underline">+62 321 869151 (WhatsApp)</a></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formulir Pendaftaran</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Nama Calon Siswa</Label>
                  <Input id="studentName" placeholder="Nama lengkap" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Program yang Dipilih</Label>
                  <select id="program" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Pilih Program</option>
                    <option value="tpa">Baby Class / TPA</option>
                    <option value="kb">KB (Kelompok Bermain)</option>
                    <option value="tk">TK</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Tempat Lahir</Label>
                  <Input id="birthPlace" placeholder="Tempat lahir" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Tanggal Lahir</Label>
                  <Input id="birthDate" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentName">Nama Orang Tua/Wali</Label>
                <Input id="parentName" placeholder="Nama orang tua/wali" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">No. WhatsApp</Label>
                <Input id="phone" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Alamat</Label>
                <Textarea id="address" placeholder="Alamat lengkap" />
              </div>
              <Button type="submit" className="w-full md:w-auto">Kirim Pendaftaran</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
