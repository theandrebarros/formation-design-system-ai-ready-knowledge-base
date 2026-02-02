# New MCP Server Request - Storybook MCP

**Date**: January 26, 2026  
**Requestor**: Andre Barros  
**Status**: DRAFT - Pending Security Review

---

## 🔍 Overview

### MCP Server Name
Storybook MCP

### Description
The Storybook MCP equips AI coding agents with machine-readable component metadata from Storybook. It enables agents to:
- Generate code using existing component patterns from your design system
- Access component metadata, usage snippets, and types in an optimized payload
- Run component tests (interaction and accessibility) to self-heal bugs
- Produce mergeable code that follows team standards with fewer tokens

This MCP bridges the gap between AI code generation and production-quality frontend code by providing agents the same context that developers use: which components exist, how they behave, and what "correct" looks like.

### Updated
January 26, 2026 (Early Access available as of December 2025)

### Official Documentation
- [Storybook MCP Announcement](https://storybook.js.org/blog/storybook-mcp-sneak-peek/)
- [Early Access Program](https://storybook.js.org/blog/storybook-mcp-sneak-peek/#sign-up-for-the-early-access-program)

---

## 📔 MCP Server Information

### Publisher/Vendor
Storybook (Chromatic) - https://storybook.js.org/  
Maintained by the official Storybook team at Chromatic

### Server Type
3rd Party (External) - Open Source

### Deployment Model
Local STDIO server (runs alongside local Storybook instance)

### Current Status
Early Access Program (as of December 2025)

---

## 🔐 MCP Server Authentication & Authorization

### Authentication Method
Local connection to Storybook instance - No external authentication required

### Authorization Framework
File system permissions (accesses local Storybook project files)

### Dynamic Client Registration
N/A - Local server

### Access Token Validation
N/A - No tokens required (local server)

### User Consent Mechanism
Access is limited to the local Storybook project in the developer's workspace

### Session Management
Server lifecycle tied to local Storybook instance  
No persistent sessions or external connections

### Multi-tenancy Support
N/A - Single developer workspace

---

## 🛠️ MCP Tool and Capability Management

### Available Tools

**Component Discovery & Metadata**:
- List available components in Storybook
- Get component metadata (props, types, usage examples)
- Access component stories and documentation
- Retrieve component usage snippets

**Test Execution & Self-Healing**:
- Run interaction tests on generated components
- Execute accessibility tests
- Get test failure details for autonomous correction
- Iterate on component implementations based on test feedback

**Context Optimization**:
- Serve curated component metadata in optimized payloads
- Reduce token usage by providing only relevant component context
- Access component types and prop definitions

### Tool Access Scope
- **Read-only access** to local Storybook files and metadata
- **Test execution** against local Storybook test suite
- **No write operations** to source code (agents write code, MCP provides context)
- Limited to components defined in local Storybook instance

### Tool Permissions
Access controlled by file system permissions on local machine. The MCP can:
- Read Storybook configuration files
- Access component stories and documentation
- Execute tests defined in Storybook
- Read component type definitions

Cannot:
- Write to source files
- Make network requests
- Access files outside Storybook project
- Modify git repository

### Tool Integrity Validation
Source code is open source and auditable  
Package distributed via npm (official Storybook organization)  
Can be verified through npm package signatures

### Cryptographic Verification
Standard npm package verification

### Tool Update Mechanism
Standard npm update cycle (`npm update` or similar)  
Controlled by developer, not automatic

### Privilege Escalation Prevention
- Runs with same permissions as local user
- No elevated privileges required
- No network access to external services
- Cannot access files outside project workspace

---

## 🔒 Data Security and Validation

### Data Classification
**INTERNAL** - Company component library and design system patterns

Potential access to:
- Component implementations (code)
- Design system documentation
- Component usage patterns
- Test specifications

Does NOT access:
- Production data
- Customer data
- API credentials
- Environment variables

### Input Validation
Agents provide prompts and commands. MCP validates:
- File paths stay within project boundaries
- Test execution is limited to defined test suites
- Component queries reference existing components

### Output Validation
MCP returns:
- Structured component metadata (JSON)
- Test results (pass/fail with details)
- Type definitions (TypeScript)
All outputs are derived from local Storybook files

### Data Sanitization
No sanitization required - all data sourced from local, developer-controlled files

### PII Handling
No PII access. MCP only reads component definitions and tests.

### Data Encryption
**At Rest**: Standard file system encryption (if enabled on machine)  
**In Transit**: N/A - Local IPC communication only, no network transmission

### Data Retention
No data retention - MCP reads data on-demand from local files  
No caching beyond process lifecycle

### Data Leakage Prevention
- No external network calls
- No telemetry or analytics sent externally
- All data stays on local machine
- Communication limited to local MCP protocol

---

## 🌐 Network and Communication Security

### Transport Security
Local IPC (Inter-Process Communication) via STDIO  
No network transport required

### Certificate Validation
N/A - No TLS/HTTPS (local communication only)

### Network Segmentation
N/A - No network access

### External Service Communication
None - Completely local operation

### API Endpoint Security
N/A - No external APIs

### Rate Limiting
Local process limits only (CPU/memory)

### IP Restrictions
N/A - No network access

---

## 🔍 Security Monitoring and Logging

### Audit Logging
Standard application logging to local machine  
No centralized audit logs (local tool)

Logs may include:
- Component queries
- Test execution results
- Error messages

### Security Monitoring
Developer is responsible for monitoring local process

---

## 🌥️ Cloud and External Dependencies

### External API Integrations
None - Fully local server

### Data Storage
No persistent storage. Reads from local Storybook files on-demand.

### Internet Accessibility
Not required - operates entirely offline

### npm Dependencies
Standard Storybook and Node.js dependencies (auditable via `npm audit`)

---

## ⚠️ Risk Assessment

### Security Incidents
No known security incidents specific to Storybook MCP (new tool, Early Access as of Dec 2025)

Storybook itself has a mature security track record:
- 88,999+ GitHub stars
- Used by 100,000+ developers
- Maintained by Chromatic (enterprise-backed)
- Regular security updates

### Compliance Requirements
**Internal Code Exposure**: Component implementations may contain proprietary patterns
**No External Data Transfer**: All data stays local

### Business Impact
**Low-Medium** - Exposure limited to component library patterns

**If Compromised**:
- Attacker could access component implementations (already in git repo)
- No production system access
- No customer data access
- No credential access

**Impact**: Similar to a developer workstation compromise

### Data Sensitivity
**INTERNAL** - Design system components and patterns

---

## 💼 Business Justification

### Problem Statement
FanDuel's Formation design system is extensive with hundreds of components. When using AI coding agents, they frequently generate code with:
- Wrong prop types
- Incorrect component usage patterns
- Code that doesn't match Formation standards
- Render errors that require manual fixing

This creates tech debt and reduces AI agent effectiveness.

### Proposed Solution
Storybook MCP provides AI agents with curated, machine-readable context about Formation components:
- Component APIs and prop definitions
- Usage patterns from stories
- Type safety validation
- Test-driven feedback loop to catch errors

### Expected Benefits
1. **Higher Quality Code Generation**: Agents generate Formation-compliant code that matches team standards
2. **Faster Development**: Reduce time fixing AI-generated code
3. **Fewer Tokens**: Optimized metadata payload vs. reading all source files
4. **Self-Healing**: Autonomous test loop catches bugs before human review
5. **Consistency**: All agents use same Formation patterns

### Target Users
- Frontend developers working with Formation design system
- Teams using AI coding agents (Cursor, Copilot, etc.)
- Formation design system maintainers

### Success Metrics
- Reduction in AI-generated code fixes needed
- Increased Formation component reuse in generated code
- Faster PR merge times for AI-assisted work
- Positive developer feedback on code quality

---

## 🔍 Review Result

### Result of Security Review
**PENDING REVIEW**

### Risk Rating
**LOW-MEDIUM**

**Justification**:
- Local-only operation (no network access)
- Read-only access to code already in git repo
- Standard file system permissions
- No credential or PII access
- Similar risk profile to other local development tools

### Security Reviewer & Date
*Awaiting Assignment*

### Actions Required Immediately
1. Security team review of tool architecture
2. Verification of npm package source
3. Review of file access patterns
4. Assessment of component data sensitivity

### Actions Required Before Production
1. Developer guidance documentation
2. Installation instructions via fd-mcp-gateway
3. Best practices for Formation integration
4. Review of Early Access stability

### Actions Required Before Production Traffic
N/A - Local development tool only

### Monitoring Requirements
Standard developer workstation monitoring applies

### Review Schedule
Initial review upon submission  
Re-review when tool exits Early Access to general availability

---

## 📋 Technical Requirements

### Prerequisites
- React design system (Formation)
- Storybook 10.1-alpha or later
- Node.js and npm
- CI coverage (for test execution)
- fd-mcp-gateway installed

### Installation Plan
```bash
# Install via fd-mcp-gateway
fd-mcp-gateway install storybook-mcp

# Add to ~/.cursor/fd-mcp-gateway.json
{
  "mcpServers": {
    "storybook": {
      "command": "npx",
      "args": ["@storybook/mcp-server"],
      "cwd": "${workspaceFolder}"
    }
  }
}
```

### Integration Points
- Local Storybook instance
- Formation component library
- Component test suites
- TypeScript type definitions

---

## 🎯 Next Steps

1. **Security Review**: Submit to Product Security team
2. **Early Access Enrollment**: Apply to Storybook Early Access Program
3. **Pilot Testing**: Test with Formation design system team
4. **Documentation**: Create usage guide for Formation developers
5. **Allowlist**: Add to fd-mcp-gateway approved servers upon approval

---

## 📚 Additional Resources

- [Storybook MCP Announcement](https://storybook.js.org/blog/storybook-mcp-sneak-peek/)
- [Formation Design System Docs](../formation-ds/README.md)
- [Approved MCP Servers](./mcp-servers.md)
- [MCP Gateway Documentation](User rules reference)

---

## ✅ Approval Signatures

**Requestor**: Andre Barros - *Date Pending*  
**Security Reviewer**: *Pending Assignment*  
**Approval Date**: *Pending Review*

---

**Notes for Reviewers**:
- This is a local development tool with no network access
- Risk profile similar to other local dev tools (ESLint, Prettier, TypeScript)
- Primary concern is ensuring component code sensitivity is appropriate for AI access
- Storybook is already an approved tool at FanDuel; this extends it with MCP interface
- Early Access status may warrant initial pilot with limited team before broad rollout
