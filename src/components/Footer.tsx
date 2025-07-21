import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import leantrackLogo from "@/assets/leantrack-logo.png";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={leantrackLogo} alt="LeanTrack" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              专为汽车零部件行业打造的项目管理数字化平台，
              基于APQP流程，助力企业提升研发效率，确保产品质量。
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@leantrack.cn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>400-888-6789</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>上海市浦东新区张江高科技园区</span>
              </div>
            </div>
          </div>
          
          {/* 产品导航 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">产品导航</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pain-points")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  行业痛点
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  产品功能
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  产品定价
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  关于我们
                </button>
              </li>
            </ul>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("register")}
                  className="text-background/80 hover:text-background transition-colors flex items-center gap-1"
                >
                  免费注册
                  <ExternalLink className="h-3 w-3" />
                </button>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  产品演示
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  用户手册
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  技术支持
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  隐私政策
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 分割线 */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2024 创智云通（上海）信息技术有限公司. 保留所有权利.
            </div>
            <div className="text-sm text-background/60">
              沪ICP备2024XXXXXX号
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};