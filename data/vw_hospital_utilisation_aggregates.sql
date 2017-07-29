VIEW `vw_hospital_utilisation_aggregates` AS
    select 
        `hospital_utilisation`.`hospital` AS `hospital`,
        avg(`hospital_utilisation`.`attendances`) AS `avg_attendances`,
        std(`hospital_utilisation`.`attendances`) AS `sd_attendances`,
        avg(`hospital_utilisation`.`admissions`) AS `avg_admissions`,
        std(`hospital_utilisation`.`admissions`) AS `sd_admissions`,
        avg(`hospital_utilisation`.`triage_1`) AS `avg_triage_1`,
        std(`hospital_utilisation`.`triage_1`) AS `sd_triage_1`,
        avg(`hospital_utilisation`.`triage_2`) AS `avg_triage_2`,
        std(`hospital_utilisation`.`triage_2`) AS `sd_triage_2`,
        avg(`hospital_utilisation`.`triage_3`) AS `avg_triage_3`,
        std(`hospital_utilisation`.`triage_3`) AS `sd_triage_3`,
        avg(`hospital_utilisation`.`triage_4`) AS `avg_triage_4`,
        std(`hospital_utilisation`.`triage_4`) AS `sd_triage_4`,
        avg(`hospital_utilisation`.`triage_5`) AS `avg_triage_5`,
        std(`hospital_utilisation`.`triage_5`) AS `sd_triage_5`
    from
        `hospital_utilisation`
    group by `hospital_utilisation`.`hospital`