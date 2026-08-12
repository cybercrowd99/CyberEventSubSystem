/**
 * EVENT — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by EVENT.
 *
 * Ownership boundary:
 *
 *   EVENT
 *    │
 *    ├── EVENT-IDENTITY
 *    ├── EVENT-BOUNDARIES
 *    ├── EVENT-CONTINUITY
 *    └── EVENT-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform event definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the EVENT access-surface structure.
 */

export default {
  event: {
    identity: "EVENT-IDENTITY",
    boundaries: "EVENT-BOUNDARIES",
    continuity: "EVENT-CONTINUITY",
    evidence: "EVENT-EVIDENCE",
  },
};
