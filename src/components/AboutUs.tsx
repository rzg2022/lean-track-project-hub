import { Building2, Target, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            关于我们
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            创智云通，专注于为汽车零部件行业提供专业的数字化项目管理解决方案
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* 公司介绍 */}
          <div className="mb-16">
            <Card className="bg-card shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-4">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">创智云通（上海）信息技术有限公司</CardTitle>
                <CardDescription className="text-lg mt-2">
                  专业的汽车零部件行业项目管理软件供应商
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto">
                  创智云通成立于上海，是一家专门为汽车零部件行业企业提供新产品开发项目管理系统的软件公司。
                  我们深耕制造业数字化转型领域，凭借多年的行业经验和技术积累，
                  为汽车零部件企业提供专业、高效的项目管理数字化解决方案。
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* 我们的使命 */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-white/20 rounded-lg w-fit mb-4">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl">我们的使命</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-xl leading-relaxed max-w-4xl mx-auto">
                  "通过专业的数字化项目管理平台，帮助汽车零部件企业提升研发效率，
                  缩短产品上市时间，确保产品质量，推动中国汽车零部件行业的数字化转型升级。"
                </blockquote>
              </CardContent>
            </Card>
          </div>
          
          {/* 经验积累 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">8+</CardTitle>
                <CardDescription>年制造业经验</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  深度理解制造业项目管理痛点和需求
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">50+</CardTitle>
                <CardDescription>企业客户</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  服务于各类规模的汽车零部件制造企业
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">1000+</CardTitle>
                <CardDescription>项目管理实践</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  丰富的项目管理数字化实施经验
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* 联系方式 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">联系我们</CardTitle>
                <CardDescription>
                  如有任何问题或商务合作需求，欢迎联系我们
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">邮箱地址</div>
                    <div className="text-muted-foreground">contact@leantrack.cn</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">联系电话</div>
                    <div className="text-muted-foreground">400-888-6789</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">公司地址</div>
                    <div className="text-muted-foreground">上海市浦东新区张江高科技园区</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">专业优势</CardTitle>
                <CardDescription>
                  我们在工业软件领域的核心竞争优势
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>行业深度：</strong>专注汽车零部件行业，深度理解APQP流程
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>技术领先：</strong>采用最新的云计算和微服务架构
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>服务专业：</strong>提供从咨询到实施的全方位服务
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>持续创新：</strong>基于客户反馈持续产品迭代优化
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* ICP备案 */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              沪ICP备2024XXXXXX号 | 创智云通（上海）信息技术有限公司 | 版权所有
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};