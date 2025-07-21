import { CheckCircle, AlertTriangle, FileX, GitBranch, Users, Layers, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const painPoints = [
  {
    icon: Settings,
    title: "开发流程复杂、质量标准高",
    problem: "汽车零部件产品开发过程涉及产品设计和验证、工程开发、样件试制、测试验证、生产准备等多个阶段，流程环环相扣。每个环节都有严格的质量标准和规范要求，传统的手工管理方式难以应对如此复杂的流程控制需求。",
    solution: "LeanTrack为汽车零部件行业量身定制，内置完整的产品开发流程模板，从立项到投产全生命周期管理，每个阶段都有明确的质量检查点和标准化操作指南，大幅简化流程管理复杂度。"
  },
  {
    icon: AlertTriangle,
    title: "APQP流程执行不规范",
    problem: "APQP（产品质量先期策划）是汽车行业公认的产品开发标准流程，但许多企业在实际执行中存在阶段划分模糊、各阶段输入输出定义不清、输出文档格式内容混乱等问题，严重削弱了APQP作为质量保障体系的有效性。",
    solution: "LeanTrack基于标准APQP流程设计，提供清晰的五阶段管理模板，明确定义每个阶段的输入输出要求，标准化文档模板，确保流程执行的规范性和可追溯性。"
  },
  {
    icon: FileX,
    title: "技术文档管理混乱",
    problem: "图纸、BOM、工艺文件等核心技术文档版本管理混乱，新旧版本并存、修订记录不清，文档分散存储形成信息孤岛，缺乏有效的访问权限管理，存在信息安全隐患。",
    solution: "统一的文档中心提供版本控制、权限管理、在线协作编辑功能，支持多格式文档预览，建立完整的修订历史记录，确保技术资料的安全性和一致性。"
  },
  {
    icon: GitBranch,
    title: "缺乏标准统一的工程变更管理流程",
    problem: "工程变更（ECN）管理流程缺乏标准化，变更请求的提出、审批、实施和验证过程依赖人工传递，导致变更通知不及时、不全面，引发生产线错误和产品不一致等问题。",
    solution: "内置标准ECN工作流，支持变更申请、多级审批、影响分析、实施跟踪全流程管理，实时推送变更通知，确保所有相关部门同步获取最新信息。"
  },
  {
    icon: Users,
    title: "跨部门协同效率低",
    problem: "产品开发涉及研发、采购、生产、质量等多个部门，但沟通机制滞后，任务跟踪缺失，项目信息依赖邮件、电话传递，信息流转效率低，任务责任不清、进度不明。",
    solution: "多维度任务协作平台支持看板、清单、日历视图，实时消息推送，任务自动分配和跟踪，建立透明的项目沟通机制，提升跨部门协作效率。"
  },
  {
    icon: Layers,
    title: "多项目并行管理导致的资源竞争",
    problem: "企业同时运作多个产品开发项目，项目计划制定与执行难以协同，资源在不同项目间频繁冲突，导致项目进度延误、成本超支，缺乏资源优化与优先级排序机制。",
    solution: "项目组合管理功能提供资源负载分析、项目优先级管理、资源冲突预警，支持跨项目资源统筹规划，优化资源配置，提升企业整体开发效率。"
  }
];

export const PainPoints = () => {
  return (
    <section id="pain-points" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            行业痛点与解决方案
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            深度了解汽车零部件行业项目管理挑战，提供针对性的数字化解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    问题现状
                  </h4>
                  <CardDescription className="text-sm leading-relaxed">
                    {point.problem}
                  </CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    LeanTrack解决方案
                  </h4>
                  <CardDescription className="text-sm leading-relaxed text-foreground">
                    {point.solution}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};