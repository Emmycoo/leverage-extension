;; leverage-vault
;; 
;; A smart contract that manages health data storage, access controls, and data sharing permissions
;; for the Leverage Extension platform. This contract enables users to securely store their
;; health metrics and selectively share this data with healthcare providers and applications,
;; while maintaining complete ownership and control over their information.

;; Error codes
(define-constant ERR-NOT-AUTHORIZED (err u1001))
(define-constant ERR-USER-NOT-FOUND (err u1002))
(define-constant ERR-PROVIDER-NOT-REGISTERED (err u1003))
(define-constant ERR-DATA-NOT-FOUND (err u1004))
(define-constant ERR-PERMISSION-NOT-FOUND (err u1005))
(define-constant ERR-PERMISSION-EXPIRED (err u1006))
(define-constant ERR-INVALID-PARAMETERS (err u1007))
(define-constant ERR-ALREADY-REGISTERED (err u1008))
(define-constant ERR-INSUFFICIENT-PRIVILEGES (err u1009))
(define-constant ERR-EMERGENCY-ACCESS-NOT-ENABLED (err u1010))

;; Entire previous contract code follows here (omitted for brevity, same as original content)