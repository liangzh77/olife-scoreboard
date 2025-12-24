import {
  Configuration,
  AllControlsApi,
  ClassApi,
  CompStatusApi,
  CompetitorApi,
  ControlPointApi,
  CourseApi,
  DeviceApi,
  EventApi,
  FingerCardApi,
  PunchApi,
  RegistrationApi,
  RouteApi,
  StageApi,
  TerrainApi,
  LiveApi,
} from "./client";

export class EventsLiveServerApi {
  private readonly baseUrl: string;
  private readonly configuration: Configuration;

  // API实例
  public readonly allControlsApi: AllControlsApi;
  public readonly classApi: ClassApi;
  public readonly compStatusApi: CompStatusApi;
  public readonly competitorApi: CompetitorApi;
  public readonly controlPointApi: ControlPointApi;
  public readonly courseApi: CourseApi;
  public readonly deviceApi: DeviceApi;
  public readonly eventApi: EventApi;
  public readonly fingerCardApi: FingerCardApi;
  public readonly punchApi: PunchApi;
  public readonly registrationApi: RegistrationApi;
  public readonly routeApi: RouteApi;
  public readonly stageApi: StageApi;
  public readonly terrainApi: TerrainApi;
  public readonly liveApi: LiveApi;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
    this.configuration = new Configuration({ basePath: this.baseUrl });

    // 初始化所有API实例
    this.allControlsApi = new AllControlsApi(this.configuration);
    this.classApi = new ClassApi(this.configuration);
    this.compStatusApi = new CompStatusApi(this.configuration);
    this.competitorApi = new CompetitorApi(this.configuration);
    this.controlPointApi = new ControlPointApi(this.configuration);
    this.courseApi = new CourseApi(this.configuration);
    this.deviceApi = new DeviceApi(this.configuration);
    this.eventApi = new EventApi(this.configuration);
    this.fingerCardApi = new FingerCardApi(this.configuration);
    this.punchApi = new PunchApi(this.configuration);
    this.registrationApi = new RegistrationApi(this.configuration);
    this.routeApi = new RouteApi(this.configuration);
    this.stageApi = new StageApi(this.configuration);
    this.terrainApi = new TerrainApi(this.configuration);
    this.liveApi = new LiveApi(this.configuration);
  }
}

// API 基础配置
// 开发环境使用代理路径，生产环境使用完整 URL
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/api" // 开发环境通过代理访问，避免 CORS 问题
    : "/api";

// 创建并导出全局单例实例
// 默认使用 '/api' 作为 baseUrl，开发环境会通过代理转发到后端服务器
export const eventsLiveServerApi = new EventsLiveServerApi(API_BASE_URL);
