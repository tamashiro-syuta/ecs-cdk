import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsp from 'aws-cdk-lib/aws-ecs-patterns';

// NOTE: 1スタックにつき1デプロイ
export class EcsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // NOTE: Amazon ECS Patterns(ecsp) => Amazon ECS の使用時に高レベルの抽象化を提供
    new ecsp.ApplicationLoadBalancedFargateService(this, 'MyWebServer', {
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
      publicLoadBalancer: true
    });
  }
}

// NOTE: 作成されるリソースは以下
// NOTE: - Amazon ECS クラスター
// NOTE: - Amazon VPC と Amazon EC2 インスタンス
// NOTE: - Auto Scaling グループ
// NOTE: - Application Load Balancer
// NOTE: - IAM ロールとポリシー
