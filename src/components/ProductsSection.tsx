import React, { useState, useMemo } from 'react';
import { ProductItem } from '../types';
import { Search, ArrowRight, Sparkles, Check, Clock, Laptop, Play } from 'lucide-react';

interface ProductsSectionProps {
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onSelectProduct }) => {
  const [productSearch, setProductSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchSearch =
        prod.name.toLowerCase().includes(productSearch.toLowerCase()) ||
        prod.subtitle.toLowerCase().includes(productSearch.toLowerCase()) ||
        prod.description.toLowerCase().includes(productSearch.toLowerCase());
      
      const matchCat =
        filterCategory === 'all' ||
        (filterCategory === 'coming_soon' ? prod.isComingSoon : !prod.isComingSoon);

      return matchSearch && matchCat;
    });
  }, [products, productSearch, filterCategory]);

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
            <Laptop className="w-3.5 h-3.5" />
            Proprietary Enterprise Software
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Software Products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered for high performance, custom scalability, and multi-tenant security. Click on any application to inspect module capabilities, test interactive workflows, or request a sandbox demo.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Software ({products.length})
            </button>
            <button
              onClick={() => setFilterCategory('active')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'active'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Production Ready
            </button>
            <button
              onClick={() => setFilterCategory('coming_soon')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'coming_soon'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Next-Gen AI Preview
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isComingSoon = product.isComingSoon;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform hover:-translate-y-1 relative ${
                  isComingSoon
                    ? 'border-amber-300/80 bg-gradient-to-b from-amber-50/20 to-white'
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                {/* Badge if any */}
                {product.badge && (
                  <div
                    className={`absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm ${
                      isComingSoon
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300'
                        : product.badge === 'Popular'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-900 text-white'
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                <div>
                  {/* Image banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-950">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isComingSoon ? 'grayscale-40 opacity-75' : 'opacity-90 group-hover:opacity-100'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-blue-400 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                        {product.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h4>
                      {product.startingPrice && !isComingSoon && (
                        <span className="text-[11px] font-semibold text-slate-500 font-mono">
                          {product.startingPrice}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-5 pt-0">
                  <div
                    className={`mt-2 py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                      isComingSoon
                        ? 'bg-amber-100 text-amber-900 group-hover:bg-amber-200'
                        : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                    }`}
                  >
                    {isComingSoon ? (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        Join Beta Waitlist
                      </>
                    ) : (
                      <>
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
