"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col border-2 border-casino-gold">
        <div className="bg-gradient-to-r from-[rgb(0,18,58)] to-[rgb(1,33,105)] text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0 border-b-2 border-casino-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Advertiser disclosure</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">How we are funded</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Best UK Land Casinos is an independent comparison and editorial site. We may receive compensation when
                you follow outbound links to operators featured on this website. This does not change our editorial
                focus on <strong>land-based</strong> venues and licensed premises — we do not promote online casino
                products.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Our commitment to readers</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Commercial relationships do not buy rankings. Our editorial team scores operators using factors such
                as:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>UK Gambling Commission licensing and public register status</li>
                <li>On-site safety, staff training and dispute handling</li>
                <li>Quality and variety of the physical gaming floor</li>
                <li>Transparency of venue rules, membership and ID requirements</li>
                <li>Safer gambling signage and access to help (BeGambleAware, GamCare, helpline)</li>
                <li>Cash desk efficiency and customer service in branch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Transparency</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Sponsored or tracked links are marked for users and search engines where required. We aim to list only
                groups that lawfully serve Great Britain with appropriate permissions for their land-based activities.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Your responsibility</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Information may change without notice. Always confirm dress codes, membership, stakes and house rules
                with the venue before you travel. Gamble only with money you can afford to lose and only if you are 18
                or over.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ · Great Britain · Gambling can be addictive — please play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
