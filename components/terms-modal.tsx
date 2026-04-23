"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col border-2 border-casino-gold">
        <div className="bg-gradient-to-r from-[rgb(0,18,58)] to-[rgb(1,33,105)] text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0 border-b-2 border-casino-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Terms and conditions</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">General</h3>
              <p className="text-sm sm:text-base text-gray-700">
                By using Best UK Land Casinos you agree to these terms. If you do not agree, please stop using the
                site.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Age and territory</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You must be 18 or over. Content is aimed at adults in Great Britain. We do not target children or
                vulnerable groups.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Safer gambling</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">We promote safer gambling. Remember:</p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Only gamble with money you can afford to lose</li>
                <li>Set time and spend limits before you play</li>
                <li>Never chase losses</li>
                <li>Take regular breaks</li>
                <li>Ask for help early if gambling stops being fun</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Accuracy</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We try to keep pages accurate but venue offers, hours and rules change. Always confirm details with the
                operator or venue.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Third-party links</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Outbound links are provided for convenience. We are not responsible for third-party content, cookies
                or policies.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Liability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                To the fullest extent permitted by law, Best UK Land Casinos is not liable for loss arising from use of
                this website or reliance on its information.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Help</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">If gambling is causing harm, contact:</p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>
                  <strong>National Gambling Helpline:</strong> 0808 8020 133 (free, confidential)
                </li>
                <li>
                  <strong>GamCare:</strong> www.gamcare.org.uk
                </li>
                <li>
                  <strong>BeGambleAware:</strong> www.begambleaware.org
                </li>
                <li>
                  <strong>GamStop (remote self-exclusion):</strong> www.gamstop.co.uk
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ · Venue rules apply · Gamble responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
