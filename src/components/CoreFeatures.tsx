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
    icon: Layout,
    title: "体系与标准",
    subtitle: "构建统一的开发标准体系",
    description: "支持企业构建适用于自身或客户需求的开发流程标准，包括阶段划分、任务模板、评审规则等，确保各类产品项目执行的一致性与合规性。",
    highlights: ["统一标准体系", "合规性保证", "灵活配置", "模板化管理"]
  },
  {
    icon: GanttChart,
    title: "项目可视化",
    subtitle: "全流程进展可视、透明、可控",
    description: "通过里程碑与任务级的甘特图视图，实现项目进度、关键节点、资源分配的可视化管理，方便管理者进行状态监控和资源协调。",
    highlights: ["甘特图视图", "实时监控", "关键路径识别", "资源优化"]
  },
  {
    icon: Users,
    title: "跨部门协同研发",
    subtitle: "打通业务墙，统一作业平台",
    description: "面向产品开发多角色协作特性（研发、工艺、质量、采购等），实现跨部门统一任务分配、消息通知与流程协同，消除信息孤岛。",
    highlights: ["统一协作平台", "消除信息孤岛", "智能任务路由", "多角色协同"]
  },
  {
    icon: AlertCircle,
    title: "问题与风险管理",
    subtitle: "推动问题闭环与风险前控",
    description: "系统支持对项目执行过程中出现的问题、风险进行识别、登记、整改、验证的全过程管理，避免问题重复、风险失控。",
    highlights: ["全过程管理", "风险预警机制", "问题闭环", "经验积累"]
  },
  {
    icon: CheckSquare,
    title: "质量与评审控制",
    subtitle: "全过程质量嵌入开发链条",
    description: "系统内嵌任务审批与阶段评审机制，确保关键节点和关键任务符合质量要求，实现'预防为主'的质量策划思维。",
    highlights: ["预防为主", "流程嵌入", "在线评审", "全员质量意识"]
  },
  {
    icon: FileText,
    title: "文档与经验沉淀",
    subtitle: "实现企业知识资产化",
    description: "支持项目全过程中的文档资料集中管理、版本控制与权限共享，沉淀企业知识与经验，并支持后续项目复用。",
    highlights: ["知识资产化", "版本控制", "智能检索", "经验复用"]
  },
  {
    icon: Kanban,
    title: "多组织协作",
    subtitle: "打通企业与合作伙伴的联合开发",
    description: "支持企业与外部合作方（如设计方、供应商或客户）共同参与项目执行，实现统一任务协作、资料提交与进度同步。",
    highlights: ["外部协作", "权限隔离", "统一同步", "安全保障"]
  },
  {
    icon: BarChart3,
    title: "项目数据分析",
    subtitle: "用数据驱动决策与持续改进",
    description: "系统通过多维度的数据可视化能力，帮助企业洞察项目执行质量、周期表现、资源投入与风险趋势，驱动管理优化。",
    highlights: ["数据驱动决策", "多维分析", "智能洞察", "持续改进"]
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
                  <CardTitle className="text-xl font-bold text-center text-foreground leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
                    {feature.title}
                  </CardTitle>
                  {feature.subtitle && (
                    <p className="text-sm font-medium text-center text-primary/80 mb-4">
                      {feature.subtitle}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </CardDescription>
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