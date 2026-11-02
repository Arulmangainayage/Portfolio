const SANS = "font-sans";

function Window({ file, status, children }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-outline/30 bg-inverse-surface p-5 font-mono text-xs text-inverse-on-surface shadow-ambient-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-outline/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-error/70" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#f4b400]/70" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-primary-container/70" aria-hidden="true" />
          <span className="ml-2 break-all text-outline-variant">{file}</span>
        </div>
        <span className={`${SANS} text-[11px] text-inverse-primary`}>{status}</span>
      </div>
      {children}
    </div>
  );
}

function AgentVisual() {
  return (
    <Window file="agent-workspace.dev" status="MCP Server Connected">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded border border-outline/20 bg-[#242220] p-3">
          <div className="mb-2 text-[10px] text-outline-variant">
            {"// AGENT EXECUTION LOG"}
          </div>
          <div className="space-y-1">
            <div className="text-[#89ddff]">
              &gt; Plan: Scaffold OpportunityTriggerHandler
            </div>
            <div className="text-[#c3e88d]">
              &gt; Tool: query_metadata(&apos;Opportunity&apos;)
            </div>
            <div className="text-[#f78c6c]">&gt; Generating unit test class...</div>
          </div>
          <pre className="mt-3 whitespace-pre-wrap break-words rounded bg-[#1b1a18] p-2 text-[11px] leading-relaxed text-[#e0af68]">
{`public class OppHandler {
  public static void onInsert() {...}
}`}
          </pre>
        </div>

        <div className="flex flex-col justify-between rounded border border-outline/20 bg-[#242220] p-3">
          <div>
            <div className="mb-2 text-[10px] text-outline-variant">
              {"// ACTIVE WORKFLOW GRAPH"}
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between rounded border border-inverse-primary/40 bg-primary-container/30 p-1.5 text-inverse-primary">
                <span>1. Intent Analyzer</span>
                <span>✓ Done</span>
              </div>
              <div className="flex items-center justify-between rounded border border-inverse-primary/40 bg-primary-container/30 p-1.5 text-inverse-primary">
                <span>2. Schema Inspection</span>
                <span>✓ Done</span>
              </div>
              <div className="flex items-center justify-between rounded border border-secondary-fixed/40 bg-secondary/30 p-1.5 text-secondary-fixed">
                <span>3. Synthesizing Apex</span>
                <span className="animate-pulse motion-reduce:animate-none">Active...</span>
              </div>
            </div>
          </div>
          <div className="mt-3 border-t border-outline/20 pt-2 text-[10px] text-outline-variant">
            Latency: 380ms | Tokens: 1,420
          </div>
        </div>
      </div>
    </Window>
  );
}

function OcrVisual() {
  return (
    <Window file="cv_pipeline_inspector.onnx" status="YOLOv8 Inference: 18ms">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative flex min-h-[170px] flex-col items-center justify-center rounded border border-outline/30 bg-[#1d1b18] p-3">
          <div className="relative flex h-24 w-36 items-center justify-center rounded border-2 border-dashed border-[#89ddff]">
            <span className="absolute -top-3 left-1 rounded bg-[#89ddff] px-1 text-[10px] text-inverse-surface">
              LCD_PANEL [0.98]
            </span>
            <span className="font-mono text-lg font-bold tracking-widest text-[#c3e88d]">
              04892.4
            </span>
            <div className="absolute bottom-1 right-1 text-[8px] text-outline-variant">
              kW/h Meter #08
            </div>
          </div>
        </div>

        <div className="rounded border border-outline/20 bg-[#242220] p-3">
          <div className="mb-2 text-[10px] text-outline-variant">
            {"// DETECTED TELEMETRY JSON"}
          </div>
          <pre className="whitespace-pre-wrap break-words text-[11px] leading-tight text-[#c3e88d]">
{`{
  "meter_class": "Digital_3Phase",
  "confidence": 0.987,
  "digits_parsed": 4892.4,
  "unit": "kWh",
  "bounding_box": [112, 45, 340, 180]
}`}
          </pre>
        </div>
      </div>
    </Window>
  );
}

function LakehouseVisual() {
  const stages = [
    { title: "SOURCES", detail: "SAP / SFDC / SQL / S3", tone: "text-secondary-fixed" },
    { title: "BRONZE", detail: "S3 Raw Land", tone: "text-[#e0af68]" },
    { title: "SILVER", detail: "Glue PySpark ETL", tone: "text-[#89ddff]" },
    { title: "GOLD", detail: "Athena Analytics", tone: "text-[#c3e88d]" },
  ];

  return (
    <Window file="aws-lakehouse-pipeline.arch" status="Automated Parquet Compaction">
      <div className="grid grid-cols-2 gap-2 text-center text-[10px] sm:grid-cols-4">
        {stages.map((stage) => (
          <div
            key={stage.title}
            className="flex flex-col justify-center rounded border border-outline/20 bg-[#242220] p-2 transition-colors duration-300 hover:border-inverse-primary/50"
          >
            <div className={`mb-1 font-bold ${stage.tone}`}>{stage.title}</div>
            <div className="text-outline-variant">{stage.detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-1.5 rounded border border-outline/30 bg-[#1d1b18] p-3 text-[11px]">
        <div className="flex justify-between gap-4 text-outline-variant">
          <span>CDC Consistency Checks</span>
          <span className="text-inverse-primary">100% Validated</span>
        </div>
        <div className="flex justify-between gap-4 text-outline-variant">
          <span>Average Daily Batch Latency</span>
          <span className="text-inverse-primary">4m 12s</span>
        </div>
        <div className="flex justify-between gap-4 text-outline-variant">
          <span>Automated Data Drift Detection</span>
          <span className="text-inverse-primary">Zero Outliers</span>
        </div>
      </div>
    </Window>
  );
}

function SqlVisual() {
  return (
    <Window file="query-studio-assistant.sql" status="Synthesized in 210ms">
      <div className="space-y-3">
        <div className="rounded border border-outline/20 bg-[#242220] p-2.5 text-[#89ddff]">
          <span className={`${SANS} text-[10px] text-outline-variant`}>
            NATURAL LANGUAGE:
          </span>
          <br />
          &quot;Find top 5 customer accounts by total invoice amount in Q3 with
          more than 3 active contracts.&quot;
        </div>

        <div className="rounded border border-outline/30 bg-[#1b1a18] p-2.5 text-[11px] leading-relaxed text-[#e0af68]">
          <pre className="whitespace-pre-wrap break-words">
{`SELECT c.customer_name, SUM(i.total_amt) AS revenue
FROM customers c
JOIN invoices i ON c.id = i.customer_id
WHERE i.quarter = 'Q3' AND c.active_contracts > 3
GROUP BY c.customer_name ORDER BY revenue DESC LIMIT 5;`}
          </pre>
        </div>

        <div className="rounded border border-outline/20 bg-[#242220] p-2 text-[10px]">
          <div className={`${SANS} mb-1 text-outline-variant`}>
            LIVE EXECUTION RESULT:
          </div>
          <div className="grid grid-cols-2 gap-2 text-[#c3e88d]">
            <span>1. Global Logistics Corp</span>
            <span className="text-right">$1,420,890.00</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-outline-variant">
            <span>2. Apex Industrial Ltd</span>
            <span className="text-right">$984,200.00</span>
          </div>
        </div>
      </div>
    </Window>
  );
}

const visuals = {
  agent: AgentVisual,
  ocr: OcrVisual,
  lakehouse: LakehouseVisual,
  sql: SqlVisual,
};

export default function ProjectVisual({ variant }) {
  const Component = visuals[variant];
  return Component ? <Component /> : null;
}
