import { TrendingUp, Clock, CheckCircle, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    icon: Clock,
    value: "30%",
    label: "项目周期缩短",
    description: "平均项目开发周期从18个月缩短至12.6个月"
  },
  {
    icon: CheckCircle,
    value: "95%",
    label: "任务完成率提升",
    description: "项目任务按时完成率从70%提升至95%"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "协作效率提升",
    description: "跨部门协作效率显著提升，沟通成本大幅降低"
  },
  {
    icon: Award,
    value: "60%",
    label: "质量问题减少",
    description: "产品质量问题相比之前减少60%"
  }
];

export const CustomerSuccess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            客户成功案例
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            某知名汽车零部件制造企业使用LeanTrack后的显著改善效果
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Customer Info */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  华东汽车零部件制造企业
                </h3>
                <p className="text-muted-foreground mb-4">
                  主营汽车发动机系统零部件，年产值5亿元，拥有200余名研发人员，
                  同时进行15-20个新产品开发项目
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">发动机系统</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">200+研发人员</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">年产值5亿</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="mx-auto p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                    <metric.icon className="h-8 w-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                  <CardTitle className="text-lg mb-2">{metric.label}</CardTitle>
                  <CardDescription className="text-sm">
                    {metric.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <div className="text-center">
              <blockquote className="text-xl italic mb-6">
                "LeanTrack帮助我们建立了标准化的APQP流程管理体系，项目进度透明可控，
                跨部门协作效率显著提升。特别是文档管理和变更控制功能，
                彻底解决了我们长期困扰的技术资料混乱问题。"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">李</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">李工程师</div>
                  <div className="text-white/80 text-sm">研发总监</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Implementation Results */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">实施前挑战</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  项目计划制定随意，缺乏标准化流程
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  技术文档版本管理混乱，经常使用错误版本
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  跨部门沟通主要依赖邮件和会议，效率低下
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  项目进度不透明，管理层难以掌控全局
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">实施后改善</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  建立标准APQP流程，项目执行规范化
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  文档版本统一管理，杜绝错版问题
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  在线协作平台，实时沟通和任务跟踪
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  项目监控看板，管理决策有数据支撑
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};