import { 
  GanttChart, 
  Kanban, 
  AlertCircle, 
  CheckSquare, 
  FileText, 
  Users, 
  Layout, 
  BarChart3 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: GanttChart,
    title: "项目计划与进度管理",
    description: "支持甘特图可视化项目计划，实时跟踪项目进度，自动计算关键路径，确保项目按时交付",
    benefits: ["可视化项目时间线", "关键路径分析", "里程碑管理", "进度预警"]
  },
  {
    icon: Kanban,
    title: "多维度任务协作",
    description: "提供看板、清单、日历等多种视图，支持任务分配、优先级设置、状态跟踪，提升团队协作效率",
    benefits: ["看板式任务管理", "任务依赖关系", "工时记录", "协作评论"]
  },
  {
    icon: AlertCircle,
    title: "问题与风险跟踪",
    description: "建立完整的问题管理体系，支持风险识别、评估、整改措施跟踪，降低项目风险",
    benefits: ["问题分类管理", "风险等级评估", "整改措施跟踪", "关闭验证"]
  },
  {
    icon: CheckSquare,
    title: "阶段评审管理",
    description: "基于APQP五阶段设计的评审流程，支持评审计划、评审记录、决策跟踪，确保项目质量",
    benefits: ["标准评审流程", "评审清单管理", "决策记录", "后续行动跟踪"]
  },
  {
    icon: FileText,
    title: "文档中心与知识库",
    description: "统一的文档管理平台，支持版本控制、在线预览、权限管理，建立企业知识资产",
    benefits: ["版本控制", "在线预览", "权限管理", "全文搜索"]
  },
  {
    icon: Users,
    title: "协作开发机制",
    description: "支持与供应商、合作伙伴协同开发，建立安全的外部协作环境，加速产品开发",
    benefits: ["外部用户邀请", "权限精细控制", "协作工作区", "数据安全保障"]
  },
  {
    icon: Layout,
    title: "模板中心",
    description: "提供丰富的项目模板、任务模板、团队模板，快速启动新项目，标准化管理流程",
    benefits: ["项目模板库", "任务模板", "团队模板", "自定义模板"]
  },
  {
    icon: BarChart3,
    title: "项目监控与数据分析",
    description: "实时项目监控看板，多维度数据分析，为管理决策提供数据支持，持续改进项目管理",
    benefits: ["实时监控看板", "项目绩效分析", "资源利用分析", "趋势预测"]
  }
];

export const CoreFeatures = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            核心功能
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              功能模块
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            全面覆盖汽车零部件研发项目管理各个环节，提供专业、高效的数字化解决方案
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 p-[1px] group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500">
                <div className="h-full w-full rounded-2xl bg-background/80 backdrop-blur-sm"></div>
              </div>
              
              {/* Card content */}
              <Card className="relative h-full bg-transparent border-0 shadow-none group-hover:scale-105 transition-all duration-500">
                <CardHeader className="pb-4 pt-8">
                  {/* Icon with animated background */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                      <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Benefits with enhanced styling */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex} 
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-shift p-[2px]">
              <div className="h-full w-full rounded-3xl bg-background/95 backdrop-blur-sm"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-12 lg:p-16">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                  功能特色
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  专为汽车行业定制
                </span>
              </h3>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                LeanTrack不仅提供标准的项目管理功能，更融入了汽车行业的专业知识和最佳实践。
                每个功能模块都经过汽车零部件企业的实际验证，确保符合行业特点和实际需求。
                通过模块化设计，企业可以根据自身情况灵活配置和使用。
              </p>
              
              {/* Additional feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">行业验证</h4>
                  <p className="text-sm text-muted-foreground">经过多家汽车零部件企业实际使用验证</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Layout className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">模块化设计</h4>
                  <p className="text-sm text-muted-foreground">灵活配置，按需使用各个功能模块</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">持续优化</h4>
                  <p className="text-sm text-muted-foreground">基于实际使用反馈持续改进优化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};