CREATE TABLE scm_subscription
(
id_subscription NUMBER        NOT NULL,
ds_subscription VARCHAR(4000) NOT NULL
)
;

ALTER TABLE scm_subscription ADD CONSTRAINT pk_scm_subscription PRIMARY KEY (id_subscription)
;

CREATE SEQUENCE seq_scm_subscription START WITH 1
;

CREATE OR REPLACE TRIGGER trg_bi_scm_subscription
  BEFORE INSERT ON scm_subscription
  FOR EACH ROW
BEGIN
  SELECT seq_scm_subscription.NEXTVAL
    INTO :NEW.id_subscription
    FROM dual;
END;
/

CREATE TABLE scm_subscription_item
(
id_subscription_item   NUMBER        NOT NULL,
id_subscription        NUMBER        NOT NULL,
ds_subscription_item   VARCHAR(4000) NOT NULL,
tp_billing_periodicity VARCHAR2(1)   NOT NULL,
vl_billing             NUMBER(15,2)  NOT NULL,
dt_start_subscription  DATE              NULL,
dt_end_subscription    DATE              NULL,
dt_start_billing       DATE              NULL,
ds_note                VARCHAR(4000) NOT NULL
)
;

ALTER TABLE scm_subscription_item ADD CONSTRAINT pk_scm_subscription_item  PRIMARY KEY (id_subscription_item)
;

ALTER TABLE scm_subscription_item ADD CONSTRAINT fk1_scm_subscription_item FOREIGN KEY (id_subscription) REFERENCES scm_subscription
;

-- Daily, Weekly, Monthly, Yearly, Once
ALTER TABLE scm_subscription_item ADD CONSTRAINT ck1_scm_subscription_item CHECK       (tp_billing_periodicity IN ('D','W','M','Y','O'))
;

CREATE SEQUENCE seq_scm_subscription_item START WITH 1
;

CREATE OR REPLACE TRIGGER trg_bi_scm_subscription_item
  BEFORE INSERT ON scm_subscription_item
  FOR EACH ROW
BEGIN
  SELECT seq_scm_subscription_item.NEXTVAL
    INTO :NEW.id_subscription_item
    FROM dual;
END;
/
