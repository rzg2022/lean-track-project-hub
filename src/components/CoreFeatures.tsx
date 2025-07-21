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
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            核心功能模块
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            全面覆盖汽车零部件研发项目管理各个环节，提供专业、高效的数字化解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                <div className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              功能特色
            </h3>
            <p className="text-lg leading-relaxed">
              LeanTrack不仅提供标准的项目管理功能，更融入了汽车行业的专业知识和最佳实践。
              每个功能模块都经过汽车零部件企业的实际验证，确保符合行业特点和实际需求。
              通过模块化设计，企业可以根据自身情况灵活配置和使用。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};