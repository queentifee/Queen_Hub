import { ShoppingBag } from "lucide-react";


export default function ProductLoadingState () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
            <div className="text-center">
                <div className="relative inline-block">
                    <div className="animate-pulse">
                        <ShoppingBag className="w-16 h-16 text-amber-400" strokeWidth={2}/>
                    </div>

                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 rounded-full bg-amber-200 animate-ping opacity-75"></div>
                        <div className="absolute inset-0 rounded-full bg-amber-100 animate-pulse"></div>
                    </div>
                </div>
                 <div className="mt-6 space-y-2">
          <h3 className="text-xl font-bold text-gray-800">Loading Product</h3>
          <div className="flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
            </div>

        </div>
    )
}