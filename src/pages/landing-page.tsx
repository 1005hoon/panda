import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center py-2 px-5">
          <h1>판다마켓</h1>
          <Button asChild>
            <Link to="login">로그인</Link>
          </Button>
        </nav>
      </header>
      <section className="relative bg-blue-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative z-10 mb-60">
            <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link
              to="/products"
              className="inline-flex rounded-full bg-blue-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
            >
              구경하러 가기
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-20">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
              <span className="text-sm font-medium text-blue-500">
                Hot Item
              </span>
              <h2 className="mb-2 mt-2 text-2xl font-bold">
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <p className="text-sm text-gray-600">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>

              {/* T-shirt Illustration */}
              <div className="mt-8 text-center">
                <div className="relative inline-block">
                  <div className="h-32 w-32 rounded-lg bg-green-500"></div>
                  {/* Hearts */}
                  <div className="absolute -right-4 -top-4 flex flex-col gap-1">
                    <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                    <div className="h-3 w-3 rounded-full bg-pink-400"></div>
                    <div className="h-2 w-2 rounded-full bg-pink-300"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-2 text-2xl font-bold">
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p className="mb-6 text-sm text-gray-600">
                구매하고 싶은 물품은 여기에서
                <br />
                쉽게 찾아보세요
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full rounded-full border-2 border-gray-200 px-6 py-3 pr-12 focus:border-blue-500 focus:outline-none"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </button>
              </div>
            </div>
            <section className="mx-auto max-w-6xl px-6 py-16">
              <div className="mb-16 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-bold">
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <p className="text-sm text-gray-600">
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
