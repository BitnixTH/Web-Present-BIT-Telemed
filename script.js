const CURRENT_SYSTEM = {
  patient: 'https://tsqmdpu.com/projects/bit-telemedicine-patient-yii2/',
  nurse: 'https://tsqmdpu.com/projects/bit-telemedicine-patient-yii2/nurse',
  doctor: 'https://tsqmdpu.com/projects/bit-telemedicine-patient-yii2/doctor',
  pharmacist: ''
};


const steps = [

  /* =========================================================
     STEP 01
     REGISTRATION & PATIENT PROFILE
     ========================================================= */

  {
    id: 1,
    icon: '01-registration.png',
    role: 'patient',

    th: {
      title: 'ลงทะเบียนและโปรไฟล์ผู้ป่วย',

      short:
        'ลงทะเบียนและโปรไฟล์',

      desc:
        'เชื่อมข้อมูลผู้ป่วยเดิมกับ BITHIS และ HN พร้อมรองรับผู้ป่วยใหม่ด้วยการยืนยันตัวตนและการตรวจสอบโดยเจ้าหน้าที่',

      features: [
        'ผู้ป่วยเดิม: ค้นหาและจับคู่ข้อมูลกับ BITHIS จาก HN, เลขบัตรประชาชน/Passport, ชื่อ และวันเกิด',
        'ผู้ป่วยใหม่: ยืนยันตัวตนด้วยบัตรประชาชนหรือ Passport พร้อมถ่ายภาพ Selfie ก่อนส่งให้เจ้าหน้าที่ตรวจสอบ',
        'เจ้าหน้าที่ตรวจสอบข้อมูลและเป็นผู้สร้าง HN สำหรับผู้ป่วยใหม่',
        'รองรับโปรไฟล์ส่วนตัวและที่อยู่หลายรายการ เช่น บ้าน ที่ทำงาน หรือที่อยู่อื่น',
        'สามารถเพิ่ม แก้ไข ลบ และกำหนดที่อยู่เริ่มต้นได้',
        'ที่อยู่เริ่มต้นจะถูกเลือกอัตโนมัติสำหรับการจัดส่งยา แต่ผู้ป่วยสามารถเลือกที่อยู่อื่นเฉพาะรายการสั่งซื้อนั้นได้'
      ],

      benefits: [
        'ลดการสร้างข้อมูลผู้ป่วยซ้ำในระบบ',
        'เชื่อมการรักษาออนไลน์กับข้อมูลผู้ป่วยของโรงพยาบาลได้ถูกต้อง',
        'รองรับการใช้ที่อยู่หลายรายการโดยไม่ต้องเปลี่ยนที่อยู่เริ่มต้นทุกครั้ง'
      ],

      flow: [
        'ลงทะเบียนผู้ป่วย',
        'ยืนยันตัวตน / ตรวจสอบข้อมูล',
        'เจ้าหน้าที่ตรวจสอบ',
        'สร้างหรือเชื่อม HN',
        'เชื่อมข้อมูลกับ BITHIS'
      ],

      integration: [
        'ลงทะเบียนผู้ป่วย',
        'เชื่อมข้อมูล HN'
      ],

      notes: [
        'ผู้ป่วยใหม่จะไม่สร้าง HN อัตโนมัติ เจ้าหน้าที่โรงพยาบาลต้องตรวจสอบข้อมูลและเป็นผู้สร้าง HN',
        'หากค้นหาไม่พบข้อมูลหรือข้อมูลไม่ตรงกัน ต้องส่งให้เจ้าหน้าที่ตรวจสอบก่อนสร้างข้อมูลผู้ป่วยใหม่ เพื่อป้องกันข้อมูลซ้ำ'
      ],

      status: [
        'modify',
        'new'
      ]
    },


    en: {
      title:
        'Registration & Patient Profile',

      short:
        'Patient registration & profile',

      desc:
        'Connect existing patients to BITHIS/HN and support new patients with identity verification and staff review.',

      features: [
        'Existing patient: search/match BITHIS and link existing HN',
        'New patient: Thai ID/Passport + selfie → staff review → staff creates HN',
        'Personal profile + multiple addresses (Home / Work / Other)',
        'Add / Edit / Delete / Set Default Address',
        'Default address is selected automatically for medication delivery, but another address may be selected per order'
      ],

      benefits: [
        'Reduces duplicate patient records',
        'Links online visits to hospital records accurately',
        'Allows per-order address selection without changing default'
      ],

      flow: [
        'Patient Registration',
        'Identity / Match',
        'Staff Review',
        'Create / Link HN',
        'Sync BITHIS'
      ],

      integration: [
        'Patient Registration',
        'HN Synchronization'
      ],

      notes: [
        'New patient HN is created by hospital staff after review, not automatically.',
        'If the BITHIS record is not found or information does not match, staff review is required before creating a new patient record.'
      ],

      status: [
        'modify',
        'new'
      ]
    }
  },


  /* =========================================================
     STEP 02
     HEALTH PROFILE
     ========================================================= */

  {
    id: 2,
    icon: '02-health-profile.png',
    role: 'nurse',

    th: {
      title:
        'ข้อมูลสุขภาพผู้ป่วย',

      short:
        'ข้อมูลสุขภาพ',

      desc:
        'ขยายข้อมูลสุขภาพเดิมให้ครอบคลุมข้อมูลสำคัญของผู้ป่วย และเชื่อมสัญญาณชีพจากขั้นตอนคัดกรองของพยาบาลเข้าสู่ BITHIS',

      features: [
        'บันทึกประวัติสุขภาพส่วนตัว ประวัติครอบครัว และประวัติการผ่าตัด',
        'บันทึกประวัติแพ้ยา ยาที่ใช้อยู่ และโรคประจำตัว',
        'บันทึกกรุ๊ปเลือด A+, A-, B+, B-, O+, O-, AB+ และ AB-',
        'บันทึกสถานะการสูบบุหรี่และการดื่มแอลกอฮอล์',
        'บันทึกสถานะการตั้งครรภ์และวันที่มีประจำเดือนครั้งล่าสุด',
        'บันทึกส่วนสูง น้ำหนัก และคำนวณ BMI อัตโนมัติ',
        'แสดงสถานะข้อมูลสุขภาพว่า ครบถ้วน หรือ ยังไม่ครบถ้วน',
        'สัญญาณชีพจากการคัดกรอง ได้แก่ อุณหภูมิ ความดันโลหิต ชีพจร อัตราการหายใจ น้ำตาลในเลือด และ SpO₂ เชื่อมเข้าสู่ BITHIS'
      ],

      benefits: [
        'ทีมรักษาเห็นข้อมูลสุขภาพที่สำคัญก่อนเริ่มการตรวจรักษา',
        'ลดการบันทึกข้อมูลทางคลินิกซ้ำหลายระบบ',
        'เชื่อมข้อมูล Telemedicine กับข้อมูลของโรงพยาบาลอย่างต่อเนื่อง'
      ],

      flow: [
        'ข้อมูลสุขภาพผู้ป่วย',
        'พยาบาลคัดกรอง',
        'บันทึกสัญญาณชีพ',
        'ส่งข้อมูลผ่าน API',
        'บันทึกเข้าสู่ BITHIS'
      ],

      integration: [
        'เชื่อมสัญญาณชีพ',
        'เชื่อมข้อมูลทางคลินิก'
      ],

      notes: [
        'ใช้ Health Profile เดิมของระบบและเพิ่มข้อมูลที่จำเป็น ไม่สร้างโปรไฟล์สุขภาพแยกใหม่',
        'สัญญาณชีพที่พยาบาลบันทึกในขั้นตอนคัดกรองต้องสามารถเชื่อมเข้าสู่ BITHIS ได้'
      ],

      status: [
        'modify',
        'new'
      ]
    },


    en: {
      title:
        'Comprehensive Health Profile',

      short:
        'Comprehensive health profile',

      desc:
        'Extend the current health profile and sync vital signs from nurse screening to BITHIS.',

      features: [
        'Personal, family and surgical history',
        'Drug allergy, current medication and chronic disease',
        'Blood type: A+, A-, B+, B-, O+, O-, AB+, AB-',
        'Smoking and alcohol status',
        'Pregnancy status and LMP',
        'Height / Weight / BMI',
        'Profile Complete / Incomplete status',
        'Vital signs: BT, BP, PR, RR, BS and SpO₂ → BITHIS'
      ],

      benefits: [
        'Gives the care team key health data before consultation',
        'Reduces duplicate clinical documentation',
        'Connects telemedicine data with hospital records'
      ],

      flow: [
        'Health Profile',
        'Nurse Screening',
        'Vital Signs',
        'API Sync',
        'BITHIS'
      ],

      integration: [
        'Vital Signs Sync',
        'Clinical Data'
      ],

      notes: [
        'Extend the existing Health Profile; do not create a separate profile.',
        'Vital signs recorded during nurse screening must also sync to BITHIS.'
      ],

      status: [
        'modify',
        'new'
      ]
    }
  },


  /* =========================================================
     STEP 03
     APPOINTMENT → LINE → CHECK-IN
     ========================================================= */

  {
    id: 3,
    icon: '03-appointment-checkin.png',
    role: 'patient',

    th: {
      title:
        'นัดหมาย แจ้งเตือน และเช็กอิน',

      short:
        'นัดหมายและเช็กอิน',

      desc:
        'เชื่อมกระบวนการนัดหมาย การประเมินความเร่งด่วนโดยพยาบาล การแจ้งเตือนผ่าน LINE OA และการเช็กอินแบบ Real-time',

      features: [
        'ผู้ป่วยเลือกแพทย์ วันที่ และเวลานัด พร้อมระบุอาการ',
        'สามารถแนบรูปภาพหรือไฟล์ประกอบการนัดหมายได้',
        'ผู้ป่วยสามารถแจ้งว่าต้องการรับบริการเร่งด่วน แต่พยาบาลเป็นผู้ประเมินและยืนยันระดับความเร่งด่วน',
        'ผู้ป่วยสามารถแก้ไขหรือยกเลิกเวลานัดได้ก่อนพยาบาลยืนยันนัดหมาย',
        'พยาบาลสามารถแก้ไขหรือยกเลิกเวลานัดได้ตลอดเวลา',
        'เมื่อยืนยันนัดหมายแล้ว ระบบส่ง Push Message ผ่าน LINE OA พร้อม Deep Link ไปยังหน้าที่เกี่ยวข้อง',
        'ปุ่มเช็กอินเปิดให้ใช้งานภายใน 15 นาทีก่อนเวลานัด',
        'ก่อนถึงเวลาเช็กอิน ปุ่มต้องปิดการใช้งานและแสดงเวลาที่สามารถเริ่มเช็กอินได้',
        'หลังเช็กอิน แสดงสถานะพร้อมเวลาที่เช็กอิน เช่น ✓ เช็กอินแล้ว 15:47',
        'สถานะการเช็กอินต้องแสดงแบบ Real-time ให้พยาบาล แพทย์ และเภสัชกรที่เกี่ยวข้องเห็น',
        'ผู้ป่วยที่เช็กอินแล้วเข้าสู่คิวรอหรือคิวคัดกรองตาม Workflow'
      ],

      benefits: [
        'ลดขั้นตอนและความสับสนก่อนเข้ารับบริการ',
        'ผู้ป่วยเห็นสถานะการนัดหมายและการเช็กอินได้ชัดเจน',
        'ทีมโรงพยาบาลเห็นสถานะผู้ป่วยแบบ Real-time และเตรียมการรักษาได้ดีขึ้น'
      ],

      flow: [
        'สร้างนัดหมาย',
        'พยาบาลประเมินความเร่งด่วน',
        'ยืนยันนัดหมาย',
        'แจ้งเตือนผ่าน LINE OA',
        'เช็กอิน',
        'เข้าสู่คิวรอ'
      ],

      integration: [
        'เชื่อมข้อมูลนัดหมาย',
        'ข้อมูลแพทย์'
      ],

      notes: [
        'การเช็กอินและการเข้าห้อง Video Call เป็นคนละขั้นตอน',
        'ปุ่มเข้าห้อง Video Call เปิดเมื่อแพทย์หรือระบบพร้อมเท่านั้น',
        'หลังผู้ป่วยเช็กอินแล้ว ต้องนำผู้ป่วยออกจากรายการติดตามผู้ที่ยังไม่เข้าระบบโดยอัตโนมัติ'
      ],

      status: [
        'modify',
        'new'
      ]
    },


    en: {
      title:
        'Appointment → LINE → Check-in',

      short:
        'Appointment & check-in',

      desc:
        'Connect appointment, nurse triage, LINE notification, deep link and real-time check-in.',

      features: [
        'Select doctor, date and time + symptoms',
        'Attach images or files',
        'Patient may request urgent care; nurse confirms triage level',
        'Patient can edit or cancel the appointment before nurse confirmation',
        'Nurse can edit or cancel the appointment at any time',
        'Confirmed appointment → LINE OA push notification + deep link',
        'Check-in opens within 15 minutes before appointment',
        'Before the check-in window, the button remains disabled and shows the available check-in time',
        'After check-in, show status and exact check-in time',
        'Nurse, doctor and pharmacist receive real-time check-in status',
        'Checked-in patient enters the waiting or screening queue'
      ],

      benefits: [
        'Simplifies access before consultation',
        'Makes appointment and check-in status clear to patients',
        'Provides hospital staff with real-time patient status'
      ],

      flow: [
        'Book Appointment',
        'Nurse Triage',
        'Appointment Confirmed',
        'LINE OA Push',
        'Check-in',
        'Waiting Queue'
      ],

      integration: [
        'Appointment Sync',
        'Doctor Information'
      ],

      notes: [
        'Check-in is not the same as Join Video Call.',
        'Join Video becomes available only when the doctor/system is ready.',
        'After check-in, the patient must be removed automatically from the nurse follow-up list.'
      ],

      status: [
        'modify',
        'new'
      ]
    }
  }

];
steps.push(

  /* =========================================================
     STEP 04
     NURSE PATIENT FOLLOW-UP
     ========================================================= */

  {
    id: 4,
    icon: '04-nurse-followup.png',
    role: 'nurse',

    th: {
      title:
        'ติดตามผู้ป่วยที่ยังไม่เข้าระบบ',

      short:
        'ติดตามผู้ป่วย',

      desc:
        'ติดตามผู้ป่วยที่ยังไม่เช็กอินหรือยังไม่เข้าสู่กระบวนการรักษาตามเวลานัดอย่างเป็นระบบ พร้อมการแจ้งเตือนและบันทึกประวัติการติดตาม',

      features: [
        'ระบบส่ง Reminder ผ่าน LINE OA ก่อนเวลานัดอัตโนมัติ',
        'สามารถกำหนดการแจ้งเตือนล่วงหน้า เช่น 30, 15, 10, 5, 3 และ 1 นาทีก่อนเวลานัด',
        'เมื่อถึงเวลานัดแล้วผู้ป่วยยังไม่เช็กอินหรือยังไม่เข้าสู่คิว ระบบเพิ่มผู้ป่วยเข้าสู่รายการติดตามของพยาบาล',
        'แสดงข้อมูลผู้ป่วย HN แพทย์ เวลานัด และจำนวนเวลาที่มาสาย',
        'พยาบาลสามารถโทรหาผู้ป่วย ส่งลิงก์เช็กอินหรือห้องตรวจซ้ำ และตั้งเวลาติดตามซ้ำได้',
        'บันทึกจำนวนครั้งที่ติดตาม เวลา ผู้ติดตาม ผลการติดต่อ และหมายเหตุ',
        'รองรับผลการติดตาม เช่น ติดต่อได้และกำลังเข้าระบบ, ขอเลื่อนนัด, ยกเลิกนัด, ไม่รับสาย หรือเบอร์ไม่ถูกต้อง',
        'เมื่อผู้ป่วยเช็กอินหรือเข้าสู่ Waiting Queue แล้ว ระบบนำผู้ป่วยออกจากรายการติดตามโดยอัตโนมัติ'
      ],

      benefits: [
        'ลดจำนวนผู้ป่วยที่พลาดนัด',
        'ลดงานติดตามแบบ Manual ของพยาบาล',
        'ช่วยให้ทีมพยาบาลเห็นสถานะและประวัติการติดต่อผู้ป่วยได้ชัดเจน'
      ],

      flow: [
        'แจ้งเตือนก่อนนัด',
        'ยังไม่เช็กอิน',
        'เข้าสู่รายการติดตาม',
        'โทร / ส่งลิงก์ซ้ำ',
        'บันทึกผลการติดตาม',
        'ผู้ป่วยเช็กอิน',
        'นำออกจากรายการติดตาม'
      ],

      integration: [
        'การแจ้งเตือนผ่าน LINE OA',
        'สถานะผู้ป่วย',
        'สถานะเช็กอิน'
      ],

      notes: [
        'รายการติดตามใช้สำหรับผู้ป่วยที่ยังไม่เข้าสู่ระบบตามเวลานัด',
        'ผู้ป่วยที่เช็กอินหรือเข้าสู่ Waiting Queue แล้วต้องถูกนำออกจากรายการติดตามอัตโนมัติ',
        'ข้อมูลการติดตามควรเก็บเป็น Audit Trail เพื่อดูย้อนหลังได้'
      ],

      status: [
        'new'
      ]
    },


    en: {
      title:
        'Nurse Patient Follow-up',

      short:
        'No-show patient follow-up',

      desc:
        'Provide structured follow-up for patients who have not checked in or entered the consultation flow.',

      features: [
        'Automatic LINE OA reminders before appointment time',
        'Reminder timing may include 30, 15, 10, 5, 3 and 1 minutes before appointment',
        'Patients who have not checked in at appointment time enter the nurse follow-up queue',
        'Show patient name, HN, doctor, appointment time and minutes late',
        'Nurse can call, resend check-in/room link and schedule retry',
        'Store attempt number, timestamp, nurse, result and note',
        'Support outcomes such as joining, reschedule, cancel, no answer or wrong number',
        'Automatically remove patient after successful check-in or entering the waiting queue'
      ],

      benefits: [
        'Reduces missed appointments',
        'Reduces manual follow-up work',
        'Provides clear follow-up status and contact history'
      ],

      flow: [
        'LINE Reminder',
        'No Check-in',
        'Follow-up Queue',
        'Call / Resend Link',
        'Record Outcome',
        'Check-in',
        'Remove from Follow-up'
      ],

      integration: [
        'LINE OA Reminder',
        'Patient Status Update',
        'Check-in Status'
      ],

      notes: [
        'The follow-up list is for patients who have not entered the appointment flow as expected.',
        'Patients must be removed automatically after check-in or entering the waiting queue.',
        'Follow-up activity should be stored as an audit trail.'
      ],

      status: [
        'new'
      ]
    }
  },


  /* =========================================================
     STEP 05
     PATIENT VISIT HISTORY
     ========================================================= */

  {
    id: 5,
    icon: '05-visit-history.png',
    role: 'nurse',

    th: {
      title:
        'ประวัติการรักษาและค้นหา Visit',

      short:
        'ประวัติการรักษา',

      desc:
        'รองรับผู้ป่วยหนึ่งคนมีหลาย Visit พร้อมระบบค้นหา กรองข้อมูล และแสดงข้อมูลทางคลินิกที่ผูกกับ Visit หรือ Appointment ID',

      features: [
        'ผู้ป่วยหนึ่งคนสามารถมีประวัติการรักษาได้หลาย Visit',
        'ค้นหาด้วยชื่อผู้ป่วย HN หรือเลขที่นัดหมาย',
        'กรองตามช่วงวันที่ แพทย์ หรือสถานะ Visit',
        'เลือกดูข้อมูลจากใหม่ไปเก่าหรือเก่าไปใหม่',
        'รายละเอียด Visit รวมข้อมูลนัดหมาย อาการสำคัญ เอกสารแนบ และข้อมูลคัดกรอง',
        'แสดงสัญญาณชีพ ระดับความเร่งด่วน และบันทึกของพยาบาล',
        'แสดงข้อมูลการตรวจของแพทย์ การวินิจฉัย รายการยา และการติดตาม',
        'พยาบาลและแพทย์สามารถเข้าถึงข้อมูลตามสิทธิ์ของแต่ละ Role'
      ],

      benefits: [
        'ทีมรักษาเห็นประวัติผู้ป่วยต่อเนื่องในแต่ละ Visit',
        'ค้นหาการรักษาย้อนหลังได้รวดเร็ว',
        'ลดความเสี่ยงที่ข้อมูลจากคนละ Visit ปะปนกัน'
      ],

      flow: [
        'ค้นหาผู้ป่วย',
        'เลือก Visit',
        'ดูรายละเอียด Visit',
        'ดูข้อมูลทางคลินิก',
        'ดูประวัติการติดตาม'
      ],

      integration: [
        'Visit / Appointment ID',
        'การเชื่อมข้อมูลเวชระเบียน',
        'ประวัติการรักษา'
      ],

      notes: [
        'ข้อมูลทางคลินิกต้องผูกกับ Visit หรือ Appointment ID ไม่ใช่ผูกกับ Patient อย่างเดียว',
        'การค้นหาและกรองข้อมูลควรรองรับ Date Range, Doctor และ Visit Status'
      ],

      status: [
        'modify',
        'new'
      ]
    },


    en: {
      title:
        'Patient Visit History',

      short:
        'Visit history & search',

      desc:
        'Support multiple visits per patient with search, filters and clinical data linked to Visit/Appointment ID.',

      features: [
        '1 Patient → Many Visits',
        'Search by patient name, HN or appointment number',
        'Filter by date range, doctor or visit status',
        'Sort latest to oldest or oldest to latest',
        'Visit detail includes appointment, chief complaint, attachments and screening',
        'Show vital signs, triage level and nurse notes',
        'Show doctor consultation, diagnosis, prescription and follow-up',
        'Nurse and doctor access depends on role permissions'
      ],

      benefits: [
        'Provides longitudinal patient history',
        'Makes previous visits easier to find',
        'Prevents clinical data from different visits being mixed'
      ],

      flow: [
        'Search Patient',
        'Select Visit',
        'View Visit Detail',
        'Clinical History',
        'Follow-up'
      ],

      integration: [
        'Visit / Appointment ID',
        'Clinical Record Mapping',
        'Treatment History'
      ],

      notes: [
        'Clinical records must be linked to Visit/Appointment ID, not only to the patient.',
        'Search and filter should support date range, doctor and visit status.'
      ],

      status: [
        'modify',
        'new'
      ]
    }
  },


  /* =========================================================
     STEP 06
     NURSE SCREENING → DOCTOR → AI
     ========================================================= */

  {
    id: 6,
    icon: '06-clinical-ai.png',
    role: 'doctor',

    th: {
      title:
        'คัดกรองโดยพยาบาล พบแพทย์ และ AI ช่วยงานคลินิก',

      short:
        'คัดกรองและพบแพทย์',

      desc:
        'เชื่อมการคัดกรองโดยพยาบาล สัญญาณชีพ BITHIS การตรวจผ่าน Video Call และ AI ช่วยจัดทำเอกสารทางคลินิกไว้ใน Workflow เดียว',

      features: [
        'พยาบาลบันทึกข้อมูลคัดกรองและสัญญาณชีพ โดยความดันโลหิตเป็นข้อมูลบังคับ',
        'เมื่อกดบันทึก ระบบต้องส่งข้อมูลสัญญาณชีพเข้าสู่ BITHIS ก่อน',
        'หากเชื่อม BITHIS สำเร็จ จึงสามารถยืนยันและส่งข้อมูลให้แพทย์ได้',
        'หากเชื่อมข้อมูลไม่สำเร็จ ต้องแสดง Error และมีปุ่ม Retry โดยยังไม่ส่งข้อมูลให้แพทย์',
        'แพทย์ตรวจผู้ป่วยผ่าน Video Consultation',
        'แสดงคำบรรยายและข้อความถอดเสียงจาก AI แบบเรียลไทม์ใต้หน้าวิดีโอ',
        'แยกข้อความตามผู้พูด และสามารถรองรับข้อความต้นฉบับพร้อมคำแปล',
        'Chat ต้องอยู่ด้านขวาและแยกออกจาก AI Subtitle อย่างชัดเจน',
        'หลังจบการตรวจ AI ช่วยสร้าง Transcript และสรุป SOAP',
        'AI แนะนำ ICD-10 ทั้ง Primary และ Secondary Diagnosis',
        'AI ช่วยสร้างร่าง OPD Note',
        'แพทย์ตรวจสอบ แก้ไข และเป็นผู้ยืนยันข้อมูลสุดท้าย',
        'รองรับ Save Draft และ Save Final',
        'เมื่อ Save Final แล้วสามารถพิมพ์ OPD ให้แพทย์ลงนาม และจัดเก็บเข้าสู่ EMR / BITHIS'
      ],

      benefits: [
        'ลดภาระการจัดทำเอกสารของแพทย์',
        'เชื่อมข้อมูลระหว่างพยาบาล แพทย์ และระบบโรงพยาบาลไว้ใน Workflow เดียว',
        'ช่วยให้แพทย์สรุปข้อมูลได้รวดเร็วขึ้น โดยแพทย์ยังคงเป็นผู้ตัดสินใจและยืนยันข้อมูลสุดท้าย'
      ],

      flow: [
        'พยาบาลคัดกรอง',
        'บันทึกสัญญาณชีพ',
        'เชื่อมข้อมูลกับ BITHIS',
        'ส่งข้อมูลให้แพทย์',
        'ตรวจผ่าน Video Call',
        'AI ถอดเสียงการสนทนา',
        'AI สรุป SOAP',
        'AI แนะนำ ICD-10',
        'AI สร้างร่าง OPD',
        'แพทย์ตรวจสอบและยืนยัน'
      ],

      integration: [
        'สัญญาณชีพ',
        'ข้อมูลทางคลินิก',
        'ข้อมูลการวินิจฉัย',
        'ใบสั่งยา',
        'OPD / EMR'
      ],

      notes: [
        'AI มีหน้าที่ช่วยสรุป แนะนำ และสร้างร่างเท่านั้น',
        'แพทย์เป็นผู้ตรวจสอบ แก้ไข ยืนยัน และตัดสินใจขั้นสุดท้าย',
        'AI Subtitle ต้องอยู่ใต้ Video และ Chat ต้องอยู่ด้านขวา',
        'หาก Vital Signs ยัง Sync เข้า BITHIS ไม่สำเร็จ ไม่ควรส่งข้อมูลต่อให้แพทย์',
        'การ Key รายการยาผ่าน BIT Telemedicine ยังรอยืนยัน เนื่องจากต้องตรวจสอบการใช้ฐานข้อมูลรายการยาจาก BITHIS และ API / Interface ที่เกี่ยวข้อง'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    },


    en: {
      title:
        'Nurse Screening → Doctor → AI',

      short:
        'Clinical workflow + AI',

      desc:
        'Connect nurse screening, vital signs, BITHIS, doctor consultation and AI-assisted clinical documentation in one workflow.',

      features: [
        'Nurse screening + vital signs with BP required',
        'Save vital signs → sync BITHIS before sending to doctor',
        'Successful sync → confirm → send to doctor',
        'Failed sync → show error and retry; do not send to doctor',
        'Doctor video consultation',
        'Real-time AI subtitle / transcript below video',
        'Speaker-separated transcript with optional original and translated text',
        'Chat remains on the right and separate from AI subtitle',
        'AI transcript → SOAP summary',
        'ICD-10 recommendation for primary and secondary diagnosis',
        'AI-generated OPD draft',
        'Doctor reviews, edits and confirms the final content',
        'Support Save Draft and Save Final',
        'After finalization, print OPD → doctor signature → EMR / BITHIS'
      ],

      benefits: [
        'Reduces documentation workload',
        'Connects nurse, doctor and hospital data in one workflow',
        'Accelerates clinical documentation while keeping the doctor in control'
      ],

      flow: [
        'Nurse Screening',
        'Vital Signs',
        'Sync BITHIS',
        'Send to Doctor',
        'Video Consultation',
        'AI Transcript',
        'SOAP',
        'ICD-10',
        'OPD Draft',
        'Doctor Final'
      ],

      integration: [
        'Vital Signs',
        'Clinical Data',
        'Diagnosis',
        'Prescription',
        'OPD / EMR'
      ],

      notes: [
        'AI assists, recommends and drafts.',
        'The doctor reviews, edits, confirms and makes the final decision.',
        'AI subtitle appears below the video; chat remains on the right.',
        'If vital signs fail to sync to BITHIS, the case should not be sent to the doctor.',
        'Medication entry through BIT Telemedicine is pending confirmation because BITHIS medication master and API/interface feasibility must be reviewed.'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    }
  }

);
steps.push(

  /* =========================================================
     STEP 07
     BILLING & PAYMENT
     ========================================================= */

  {
    id: 7,
    icon: '07-Icon-Payment.png',
    role: 'nurse',

    th: {
      title:
        'ตรวจสอบค่าใช้จ่ายและชำระเงิน',

      short:
        'ค่าใช้จ่ายและชำระเงิน',

      desc:
        'รวบรวมค่าบริการที่เกี่ยวข้อง เช่น ค่าแพทย์ ค่ายา และค่าบริการทางการพยาบาล เพื่อให้พยาบาลตรวจสอบก่อนส่งยอดให้ผู้ป่วยชำระเงิน',

      features: [
        'รองรับค่าแพทย์ ค่ายา และค่าบริการทางการพยาบาล',
        'พยาบาลตรวจสอบและยืนยันรายการค่าใช้จ่ายก่อนส่งให้ผู้ป่วย',
        'ส่ง Bill ไปยัง Life Line App',
        'แจ้งเตือนผู้ป่วยผ่าน LINE OA พร้อม Deep Link เข้าสู่หน้าชำระเงิน',
        'รองรับสถานะการชำระเงิน เช่น รอชำระ, กำลังดำเนินการ, ชำระสำเร็จ, ไม่สำเร็จ, ยกเลิก และคืนเงิน',
        'สถานะการชำระเงินควรอัปเดตกลับเข้าสู่ระบบเพื่อให้เจ้าหน้าที่ติดตามได้'
      ],

      benefits: [
        'ทำให้การตรวจสอบค่าใช้จ่ายและการชำระเงินอยู่ใน Patient Journey เดียวกัน',
        'ช่วยลดความผิดพลาดของยอดเรียกเก็บก่อนส่งให้ผู้ป่วย',
        'ผู้ป่วยสามารถเปิดหน้าชำระเงินจาก LINE OA ได้โดยตรง'
      ],

      flow: [
        'รวบรวมค่าใช้จ่าย',
        'พยาบาลตรวจสอบ',
        'ยืนยันยอด',
        'ส่ง Bill',
        'แจ้งเตือนผ่าน LINE OA',
        'ผู้ป่วยชำระเงิน',
        'อัปเดตสถานะการชำระเงิน'
      ],

      integration: [
        'ข้อมูลค่าใช้จ่าย',
        'สถานะการชำระเงิน',
        'การเชื่อมรายการค่าใช้จ่ายกับ BITHIS'
      ],

      notes: [
        '⚪ รอยืนยัน: ค่าแพทย์ ค่ายา และค่าบริการทางการพยาบาล จะ Key Manual ผ่าน BIT Telemedicine หรือรับข้อมูลจาก BITHIS ผ่าน API / Interface',
        '⚪ รอยืนยัน: Payment Gateway ที่จะใช้งานจริง',
        'การแจ้งเตือนสำคัญที่เกิดจาก Life Line App ต้องส่งผ่าน LINE OA ด้วย',
        '⚪ รอยืนยัน: ต้องกำหนดให้ชัดเจนว่าค่าจัดส่งจะรวมก่อน Final Payment หรือมีการชำระเพิ่มภายหลัง'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    },


    en: {
      title:
        'Billing & Payment',

      short:
        'Charge review & payment',

      desc:
        'Collect doctor fee, medication fee and nursing service fee for nurse review before sending the bill to the patient.',

      features: [
        'Doctor fee + medication fee + nursing service fee',
        'Nurse reviews and verifies charges before sending to patient',
        'Send bill to Life Line App',
        'LINE OA push notification + deep link to payment screen',
        'Support payment status: Pending / Processing / Paid / Failed / Cancelled / Refunded',
        'Payment status should update back to the system for staff tracking'
      ],

      benefits: [
        'Keeps billing and payment within one continuous journey',
        'Nurse verification reduces billing errors',
        'Patients can access payment directly from LINE OA'
      ],

      flow: [
        'Clinical Charges',
        'Nurse Review',
        'Verify Charges',
        'Send Bill',
        'LINE OA Push',
        'Patient Payment',
        'Payment Status'
      ],

      integration: [
        'Billing & Charges',
        'Payment Status',
        'BITHIS Charge Interface'
      ],

      notes: [
        '⚪ Pending confirmation: doctor fee, medication fee and nursing service fee may be entered manually in BIT Telemedicine or retrieved from BITHIS via API/interface.',
        '⚪ Pending confirmation: final payment gateway.',
        'Important Life Line App notifications must also be sent through LINE OA.',
        '⚪ Pending confirmation: whether delivery fee is included before final payment or requires additional payment later.'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    }
  },


  /* =========================================================
     STEP 08
     MEDICATION DELIVERY
     ========================================================= */

  {
    id: 8,
    icon: '08-delivery.png',
    role: 'patient',

    th: {
      title:
        'จัดส่งยาและติดตามสถานะ',

      short:
        'จัดส่งยา',

      desc:
        'หลังจัดเตรียมยา ผู้ป่วยเลือกที่อยู่และวิธีการจัดส่ง พร้อมคำนวณค่าจัดส่งและติดตามสถานะจนถึงปลายทาง',

      features: [
        'เลือกที่อยู่จัดส่งจากรายการที่บันทึกไว้ในโปรไฟล์ผู้ป่วย',
        'ระบบเลือกที่อยู่เริ่มต้นให้อัตโนมัติ แต่ผู้ป่วยสามารถเปลี่ยนที่อยู่เฉพาะ Order ได้',
        'เลือกวิธีจัดส่งแบบมาตรฐานหรือแบบด่วน',
        'การจัดส่งแบบมาตรฐานเชื่อมกับ SHIPPOP',
        'การจัดส่งแบบด่วนหรือเร่งด่วนเชื่อมกับ SKOOTAR',
        'คำนวณค่าจัดส่งตามวิธีการจัดส่งที่ผู้ป่วยเลือก',
        'ค่าจัดส่งถูกเพิ่มเป็นรายการค่าใช้จ่ายเพิ่มเติม',
        'สถานะการจัดส่งต้องสามารถติดตามได้',
        'แจ้งสถานะการจัดส่งผ่าน LINE OA พร้อม Deep Link'
      ],

      benefits: [
        'ลดความผิดพลาดของที่อยู่จัดส่ง',
        'ผู้ป่วยเลือกวิธีจัดส่งตามความต้องการได้',
        'ผู้ป่วยติดตามสถานะยาได้ต่อเนื่องจนได้รับยา'
      ],

      flow: [
        'จัดเตรียมยา',
        'เลือกที่อยู่',
        'เลือกวิธีจัดส่ง',
        'คำนวณค่าจัดส่ง',
        'เพิ่มค่าจัดส่งเข้าระบบ',
        'จัดส่งยา',
        'ติดตามสถานะ'
      ],

      integration: [
        'ค่าจัดส่ง',
        'เพิ่มรายการค่าใช้จ่ายเข้า BITHIS',
        'สถานะการจัดส่ง'
      ],

      notes: [
        'ค่าจัดส่งต้องถูกเพิ่มเข้า BITHIS เป็น Charge เพิ่มผ่าน API',
        '⚪ รอยืนยัน: ค่าจัดส่งควรถูกคำนวณก่อน Final Payment หรือให้ผู้ป่วยชำระเพิ่มภายหลังจากเลือกวิธีจัดส่ง',
        'Default Address เป็นเพียงค่าเริ่มต้น ผู้ป่วยสามารถเลือกที่อยู่อื่นสำหรับ Order นั้นได้โดยไม่เปลี่ยน Default Address'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    },


    en: {
      title:
        'Medication Delivery',

      short:
        'Medication delivery & tracking',

      desc:
        'After medication preparation, the patient selects a delivery method and address, with delivery fee calculation and shipment tracking.',

      features: [
        'Select delivery address from saved profile addresses',
        'Default address is preselected but may be changed per order',
        'Choose Standard / Express delivery',
        'Standard delivery → SHIPPOP',
        'Express or urgent delivery → SKOOTAR',
        'Calculate delivery / shipping fee based on selected method',
        'Add delivery fee as an additional charge',
        'Track shipment status',
        'Send shipment updates through LINE OA with deep link'
      ],

      benefits: [
        'Reduces delivery address errors',
        'Gives patients flexible delivery options',
        'Provides continuous tracking until medication arrives'
      ],

      flow: [
        'Medication Preparation',
        'Select Address',
        'Select Delivery Method',
        'Calculate Delivery Fee',
        'Insert Additional Charge',
        'Shipment',
        'Tracking'
      ],

      integration: [
        'Delivery / Shipping Fee',
        'BITHIS Charge Insert',
        'Delivery Status'
      ],

      notes: [
        'Delivery fee must be inserted into BITHIS as an additional charge via API.',
        '⚪ Pending confirmation: whether delivery fee is calculated before final payment or requires an additional payment after delivery method selection.',
        'Default address is only a preselected address; patients may choose another address per order without changing the default.'
      ],

      status: [
        'modify',
        'new',
        'pending'
      ]
    }
  },


  /* =========================================================
     STEP 09
     ACCEPT & VERIFY MEDICINE
     ========================================================= */

  {
    id: 9,
    icon: '09-medication-verify.png',
    role: 'patient',

    th: {
      title:
        'รับยาและตรวจสอบยา',

      short:
        'รับและตรวจสอบยา',

      desc:
        'หลังผู้ป่วยได้รับยา ให้ยืนยันการรับยาและส่งรูปภาพหรือวิดีโอเพื่อช่วยตรวจสอบความถูกต้องก่อนเข้าสู่ขั้นตอนการดูแลโดยเภสัชกร',

      features: [
        'ผู้ป่วยกดยืนยันว่าได้รับยาแล้ว',
        'อัปโหลดรูปภาพหรือวิดีโอของยาที่ได้รับ',
        'ตรวจสอบความถูกต้องของยาก่อนเข้าสู่ Pharmacist Workflow',
        'อัปเดตสถานะการจ่ายยาและการจัดส่ง',
        'เมื่อยืนยันการรับยาและตรวจสอบเรียบร้อยแล้ว จึงเข้าสู่ขั้นตอนนัดหมายเภสัชกร'
      ],

      benefits: [
        'เพิ่ม Safety Check หลังการจัดส่งยา',
        'ช่วยยืนยันว่าผู้ป่วยได้รับยาจริง',
        'ลดความเสี่ยงจากการได้รับยาผิดหรือได้รับยาไม่ครบ',
        'สร้างกระบวนการดูแลยาแบบต่อเนื่องก่อนเริ่มให้คำปรึกษาโดยเภสัชกร'
      ],

      flow: [
        'จัดส่งยาสำเร็จ',
        'ยืนยันการรับยา',
        'อัปโหลดรูปภาพ / วิดีโอ',
        'ตรวจสอบยา',
        'อัปเดตสถานะ',
        'เข้าสู่ขั้นตอนเภสัชกร'
      ],

      integration: [],

      notes: [
        'การอัปโหลดรูปภาพหรือวิดีโอใช้เป็นขั้นตอนยืนยันก่อนการให้คำปรึกษาเรื่องยา',
        'สถานะการจ่ายยาควรเชื่อมกลับเข้า BITHIS ตาม API Integration ที่กำหนด',
        'ขั้นตอนนี้เป็นจุดเชื่อมจาก Delivery ไปสู่ Pharmacist Care'
      ],

      status: [
        'new',
        'modify'
      ]
    },


    en: {
      title:
        'Accept & Verify Medicine',

      short:
        'Medication receipt & verification',

      desc:
        'After receiving medication, the patient confirms receipt and uploads photo/video evidence before entering the pharmacist workflow.',

      features: [
        'Patient confirms medication received',
        'Upload photo / video to verify medication',
        'Medication verification before pharmacist workflow',
        'Update dispensing / delivery status',
        'After successful verification → pharmacist appointment'
      ],

      benefits: [
        'Adds a safety check after medication delivery',
        'Confirms that the patient actually received the medication',
        'Reduces risk of incorrect or incomplete medication delivery',
        'Creates a closed-loop medication journey before counseling'
      ],

      flow: [
        'Medication Delivered',
        'Confirm Received',
        'Upload Photo / Video',
        'Verify Medicine',
        'Update Status',
        'Pharmacist Workflow'
      ],

      integration: [],

      notes: [
        'Photo/video verification is completed before medication counseling.',
        'Dispensing status should sync back to BITHIS according to the defined API integration.',
        'This step connects medication delivery with pharmacist care.'
      ],

      status: [
        'new',
        'modify'
      ]
    }
  }

);
steps.push(

  /* =========================================================
     STEP 10
     APPOINTMENT WITH PHARMACIST
     ========================================================= */

  {
    id: 10,
    icon: '10-pharmacist-appointment.png',
    role: 'pharmacist',

    th: {
      title:
        'นัดหมายกับเภสัชกร',

      short:
        'นัดหมายเภสัชกร',

      desc:
        'หลังตรวจสอบยาเรียบร้อยแล้ว ผู้ป่วยเข้าสู่ขั้นตอนนัดหมายเภสัชกร พร้อมการแจ้งเตือน เช็กอิน และเข้าสู่คิวรอ',

      features: [
        'รองรับการนัดหมายกับเภสัชกร',
        'ส่งการยืนยันนัดหมายผ่าน Life Line App',
        'ส่ง Push Message Notification ผ่าน LINE OA พร้อม Deep Link',
        'ปุ่มเช็กอินเปิดให้ใช้งานภายใน 15 นาทีก่อนเวลานัด',
        'ก่อนถึงเวลาเช็กอิน ปุ่มต้องปิดการใช้งานและแสดงเวลาที่สามารถเริ่มเช็กอินได้',
        'หลังเช็กอิน แสดงสถานะรอเภสัชกร',
        'รองรับตารางนัดหมายและคิวของเภสัชกรแยกตาม Role',
        'สถานะการเช็กอินต้องอัปเดตให้เภสัชกรเห็นแบบ Real-time'
      ],

      benefits: [
        'ทำให้การดูแลโดยเภสัชกรเป็นส่วนหนึ่งของ Patient Journey อย่างเป็นระบบ',
        'ลดโอกาสผู้ป่วยพลาดนัดกับเภสัชกร',
        'เภสัชกรเห็นสถานะผู้ป่วยและคิวได้ชัดเจน'
      ],

      flow: [
        'ตรวจสอบยาเรียบร้อย',
        'สร้างนัดหมายเภสัชกร',
        'ยืนยันนัดหมาย',
        'แจ้งเตือนผ่าน LINE OA',
        'เช็กอิน',
        'รอเภสัชกร'
      ],

      integration: [
        'สถานะนัดหมาย',
        'คิวผู้ป่วย',
        'การแจ้งเตือนผ่าน LINE OA',
        'สถานะเช็กอิน'
      ],

      notes: [
        'หลักการเช็กอินภายใน 15 นาทีก่อนเวลานัดใช้แนวทางเดียวกับการนัดหมายแพทย์',
        '⚪ รอยืนยัน: URL สำหรับ Pharmacist Portal',
        'เมื่อเภสัชกรพร้อม ระบบจึงเปิดให้ผู้ป่วยเข้าสู่ Video Call'
      ],

      status: [
        'new',
        'pending'
      ]
    },


    en: {
      title:
        'Appointment with Pharmacist',

      short:
        'Pharmacist appointment',

      desc:
        'After medication verification, the patient enters the pharmacist appointment workflow with scheduling, reminders, check-in and waiting queue.',

      features: [
        'Pharmacist appointment scheduling',
        'Appointment confirmation through Life Line App',
        'Push message notification through LINE OA with deep link',
        'Check-in opens within 15 minutes before appointment',
        'Before the check-in window, the button remains disabled and shows the available check-in time',
        'Show Waiting for Pharmacist after check-in',
        'Dedicated pharmacist schedule and queue',
        'Real-time check-in status for pharmacist'
      ],

      benefits: [
        'Makes pharmacist care a structured part of the patient journey',
        'Reduces missed pharmacist appointments',
        'Provides clear patient status and queue visibility'
      ],

      flow: [
        'Medication Verified',
        'Schedule Pharmacist',
        'Appointment Confirmed',
        'LINE OA Reminder',
        'Check-in',
        'Waiting for Pharmacist'
      ],

      integration: [
        'Appointment Status',
        'Patient Queue',
        'LINE OA Notification',
        'Check-in Status'
      ],

      notes: [
        'Check-in within 15 minutes follows the same principle as doctor appointments.',
        '⚪ Pending confirmation: Pharmacist Portal URL.',
        'Join Video becomes available when the pharmacist/system is ready.'
      ],

      status: [
        'new',
        'pending'
      ]
    }
  },


  /* =========================================================
     STEP 11
     MEDICAL GUIDANCE WITH PHARMACIST
     ========================================================= */

  {
    id: 11,
    icon: '11-pharmacist-counseling.png',
    role: 'pharmacist',

    th: {
      title:
        'รับคำแนะนำการใช้ยาจากเภสัชกร',

      short:
        'คำแนะนำการใช้ยา',

      desc:
        'ผู้ป่วยพูดคุยกับเภสัชกรผ่าน Video Call เพื่อรับคำแนะนำการใช้ยา พร้อมบันทึกข้อมูลการให้คำปรึกษาไว้ในระบบ',

      features: [
        'เภสัชกรให้คำปรึกษาผ่าน Video Consultation',
        'อธิบายวิธีใช้ยา ขนาดยา และช่วงเวลาที่ควรใช้ยา',
        'ให้คำแนะนำเกี่ยวกับข้อควรระวัง',
        'อธิบายผลข้างเคียงที่ควรเฝ้าระวัง',
        'แนะนำวิธีการเก็บรักษายาอย่างเหมาะสม',
        'บันทึก Counseling Note หลังให้คำปรึกษา',
        'เมื่อให้คำปรึกษาเสร็จ ระบบบันทึกสถานะ Completed'
      ],

      benefits: [
        'เพิ่มความเข้าใจของผู้ป่วยในการใช้ยาอย่างถูกต้อง',
        'เพิ่มความปลอดภัยด้านการใช้ยา',
        'มีข้อมูลการให้คำปรึกษาสำหรับการติดตามครั้งถัดไป',
        'ช่วยเชื่อมการจัดส่งยาเข้ากับการดูแลหลังได้รับยา'
      ],

      flow: [
        'รอเภสัชกร',
        'เข้าสู่ Video Call',
        'ให้คำแนะนำการใช้ยา',
        'บันทึก Counseling Note',
        'เสร็จสิ้นการให้คำปรึกษา'
      ],

      integration: [
        'ข้อมูลยา',
        'บันทึกการให้คำปรึกษา',
        'Visit / Appointment'
      ],

      notes: [
        'การให้คำปรึกษาโดยเภสัชกรเป็นขั้นตอนต่อเนื่องจากการตรวจสอบยาที่ผู้ป่วยได้รับ',
        'ข้อมูล Counseling ควรถูกผูกกับ Visit หรือ Appointment ที่เกี่ยวข้อง',
        'บันทึกการให้คำปรึกษาควรสามารถดูย้อนหลังได้ตามสิทธิ์ของผู้ใช้งาน'
      ],

      status: [
        'new'
      ]
    },


    en: {
      title:
        'Medical Guidance with Pharmacist',

      short:
        'Pharmacist counseling',

      desc:
        'The patient joins a video consultation with the pharmacist for medication guidance and counseling documentation.',

      features: [
        'Pharmacist video consultation',
        'Medication usage, dose and timing guidance',
        'Precautions guidance',
        'Side effect counseling',
        'Medication storage guidance',
        'Medication counseling note',
        'Complete pharmacist session'
      ],

      benefits: [
        'Improves patient understanding of medication use',
        'Improves medication safety',
        'Creates a counseling record for future follow-up',
        'Connects medication delivery with post-delivery care'
      ],

      flow: [
        'Waiting for Pharmacist',
        'Join Video Call',
        'Medication Counseling',
        'Counseling Note',
        'Session Completed'
      ],

      integration: [
        'Medication Information',
        'Counseling Record',
        'Visit / Appointment'
      ],

      notes: [
        'Pharmacist counseling follows medication verification.',
        'Counseling records should be linked to the related Visit / Appointment.',
        'Counseling history should be available according to role permissions.'
      ],

      status: [
        'new'
      ]
    }
  },


  /* =========================================================
     STEP 12
     FOLLOW-UP & NEXT APPOINTMENT
     ========================================================= */

  {
    id: 12,
    icon: '12-followup.png',
    role: 'patient',

    th: {
      title:
        'ติดตามอาการและนัดหมายครั้งถัดไป',

      short:
        'ติดตามและนัดครั้งถัดไป',

      desc:
        'ปิด Patient Journey ด้วยการประเมินว่าจำเป็นต้องติดตามต่อหรือไม่ และสร้างนัดหมายครั้งถัดไปเพื่อให้การดูแลผู้ป่วยต่อเนื่อง',

      features: [
        'แพทย์สามารถกำหนดให้มีการติดตามอาการ',
        'เภสัชกรสามารถกำหนดให้มีการติดตามเรื่องการใช้ยา',
        'รองรับกรณีไม่ต้องติดตามต่อ',
        'สามารถสร้างนัดหมายครั้งถัดไปได้',
        'ส่ง Reminder และ Notification ผ่าน LINE OA',
        'ผู้ป่วยสามารถดูรายละเอียดนัดหมายครั้งถัดไปได้',
        'เมื่อถึงรอบนัดหมายใหม่ ผู้ป่วยวนกลับเข้าสู่ Appointment Journey'
      ],

      benefits: [
        'เปลี่ยนจากการรักษาแบบครั้งเดียวเป็นการดูแลต่อเนื่อง',
        'ลดโอกาสผู้ป่วยหลุดจากการติดตามรักษา',
        'เชื่อม Visit ปัจจุบันกับ Visit ครั้งถัดไปได้ชัดเจน'
      ],

      flow: [
        'จบการรักษาหรือให้คำปรึกษา',
        'ประเมินการติดตาม',
        'สร้างนัดหมายครั้งถัดไป',
        'แจ้งเตือนผ่าน LINE OA',
        'Visit ครั้งถัดไป',
        'กลับเข้าสู่ Appointment Journey'
      ],

      integration: [
        'สถานะการติดตาม',
        'นัดหมายครั้งถัดไป',
        'การแจ้งเตือนผ่าน LINE OA'
      ],

      notes: [
        '⚪ รอยืนยัน: ใครเป็นผู้สร้าง Follow-up Appointment ในแต่ละกรณี',
        '⚪ รอยืนยัน: ผู้ป่วยสามารถ Reschedule นัดหมายเองได้หรือไม่',
        '⚪ รอยืนยัน: ระยะเวลาการติดตามและ Reminder Logic',
        'หากไม่ต้องติดตามต่อ สามารถปิด Visit เป็น Completed ได้'
      ],

      status: [
        'new',
        'pending'
      ]
    },


    en: {
      title:
        'Follow-up & Next Appointment',

      short:
        'Follow-up & next visit',

      desc:
        'Close the patient journey with follow-up decisions and next appointment creation to support continuous care.',

      features: [
        'Doctor follow-up',
        'Pharmacist follow-up',
        'No follow-up required',
        'Create next appointment',
        'LINE OA reminder / notification',
        'Patient can view next appointment details',
        'Loop back into the next appointment journey'
      ],

      benefits: [
        'Transforms one-time consultation into continuous care',
        'Reduces loss to follow-up',
        'Clearly connects the current visit with the next visit'
      ],

      flow: [
        'Treatment / Counseling Completed',
        'Follow-up Decision',
        'Create Next Appointment',
        'LINE OA Reminder',
        'Next Visit',
        'Return to Appointment Journey'
      ],

      integration: [
        'Follow-up Status',
        'Next Appointment',
        'LINE OA Notification'
      ],

      notes: [
        '⚪ Pending confirmation: who creates the follow-up appointment.',
        '⚪ Pending confirmation: whether patients can reschedule independently.',
        '⚪ Pending confirmation: follow-up interval / reminder logic.',
        'If no follow-up is required, the visit may be closed as Completed.'
      ],

      status: [
        'new',
        'pending'
      ]
    }
  }

);

/* =========================================================
   ACTUAL WORKFLOW / ROLE / BITHIS API CONTENT
   Verified from the original operational brief (13 Sep 2026)
   ========================================================= */

const ROLE_META = {
  patient: { th: 'ผู้ป่วย', en: 'Patient', icon: 'Patient-Icon.png', platformIcon: 'Line-BIT.png', systemTh: 'BIT Telemedicine (LINE OA: Life App)', systemEn: 'BIT Telemedicine (LINE OA: Life App)' },
  nurse: { th: 'พยาบาล', en: 'Nurse', icon: 'Nurse-Icon.png', platformIcon: 'Web-BIT.png', systemTh: 'BIT Telemedicine (Web)', systemEn: 'BIT Telemedicine (Web)' },
  doctor: { th: 'แพทย์', en: 'Doctor', icon: 'Doctor-Icon.png', platformIcon: 'Web-BIT.png', systemTh: 'BIT Telemedicine (Web)', systemEn: 'BIT Telemedicine (Web)' },
  pharmacist: { th: 'เภสัชกร', en: 'Pharmacist', icon: 'Pharmacist-Icon.png', platformIcon: 'Web-BIT.png', systemTh: 'BIT Telemedicine (Web)', systemEn: 'BIT Telemedicine (Web)' },
  cashier: { th: 'การเงิน', en: 'Finance', icon: 'Cashier-Icon.png', platformIcon: '', systemTh: 'BITHIS', systemEn: 'BITHIS' }
};

const ACTUAL_STEP_META = {
  1: { roles: ['patient', 'nurse'], hasBithisApi: true },
  2: { roles: ['patient'], hasBithisApi: true },
  3: { roles: ['patient', 'nurse'], hasBithisApi: true },
  4: { roles: ['nurse'], hasBithisApi: false },
  5: { roles: ['nurse', 'doctor'], hasBithisApi: false },
  6: { roles: ['nurse', 'doctor'], hasBithisApi: false },
  7: { roles: ['nurse', 'cashier', 'patient'], hasBithisApi: true },
  8: { roles: ['pharmacist', 'patient', 'cashier'], hasBithisApi: true },
  9: { roles: ['patient'], hasBithisApi: false },
  10: { roles: ['patient', 'pharmacist'], hasBithisApi: false },
  11: { roles: ['pharmacist', 'patient'], hasBithisApi: false },
  12: { roles: ['nurse', 'patient'], hasBithisApi: true }
};

const ROLE_ACTIONS = {
  1: { patient: { th: 'ลงทะเบียน ยืนยันตัวตน และส่งข้อมูล', en: 'Register, verify identity and submit data' }, nurse: { th: 'ลงทะเบียนผู้ป่วยเก่า ตรวจสอบข้อมูล และสร้าง HN ให้ผู้ป่วยใหม่', en: 'Register existing patients, verify data and create HN for new patients' } },
  2: { patient: { th: 'กรอกและอัปเดตข้อมูลสุขภาพ', en: 'Complete and update health information' }, nurse: { th: 'คัดกรองและบันทึกสัญญาณชีพ', en: 'Screen patient and record vital signs' } },
  3: { patient: { th: 'เลือกนัด แจ้งอาการ แก้ไขหรือยกเลิกนัดได้ก่อนพยาบาลยืนยัน และเช็กอิน', en: 'Book, report symptoms, edit or cancel before nurse confirmation, and check in' }, nurse: { th: 'ประเมินความเร่งด่วน ยืนยันนัด และแก้ไขหรือยกเลิกนัดได้ตลอดเวลา', en: 'Triage urgency, confirm, edit or cancel the appointment at any time' } },
  4: { nurse: { th: 'โทรติดตาม ส่งลิงก์ และบันทึกผล', en: 'Call, resend link and record outcome' }, patient: { th: 'เช็กอินหรือแจ้งเลื่อน/ยกเลิกนัด', en: 'Check in, reschedule or cancel' } },
  5: { nurse: { th: 'ค้นหาและดูประวัติ Visit ตามสิทธิ์', en: 'Search and review Visit history by permission' }, doctor: { th: 'ดูข้อมูลการรักษาย้อนหลังตามสิทธิ์', en: 'Review clinical history by permission' } },
  6: { nurse: { th: 'คัดกรอง บันทึก V/S และส่งต่อแพทย์', en: 'Screen, record vital signs and hand off to doctor' }, doctor: { th: 'ตรวจผ่าน VDO และยืนยันเอกสารทางคลินิก', en: 'Consult by video and confirm clinical documentation' } },
  7: { nurse: { th: 'ตรวจสอบและยืนยันยอดก่อนส่งผู้ป่วย', en: 'Review and confirm charges before billing' }, cashier: { th: 'จัดการรายการค่าใช้จ่ายใน BITHIS', en: 'Manage charges in BITHIS' }, patient: { th: 'รับ Bill และชำระเงินผ่าน LINE', en: 'Receive bill and pay through LINE' } },
  8: { pharmacist: { th: 'จัดเตรียมยาเพื่อส่งมอบ', en: 'Prepare medication for delivery' }, patient: { th: 'เลือกที่อยู่ วิธีส่ง และติดตามสถานะ', en: 'Choose address, delivery method and track status' }, cashier: { th: 'รับค่าจัดส่งเป็น Charge ใน BITHIS', en: 'Receive delivery fee as a BITHIS charge' } },
  9: { patient: { th: 'ยืนยันรับยา ตรวจสอบยา และส่งรูป/วิดีโอ', en: 'Confirm receipt, verify medication and upload photo/video' } },
  10: { patient: { th: 'เลือกนัด เช็กอิน และรอเภสัชกร', en: 'Book, check in and wait for pharmacist' }, pharmacist: { th: 'เปิดตารางนัดและบริหารคิว', en: 'Open schedule and manage queue' } },
  11: { pharmacist: { th: 'ให้คำแนะนำและบันทึก Counseling Note', en: 'Counsel patient and record counseling note' }, patient: { th: 'เข้าร่วม VDO และรับคำแนะนำการใช้ยา', en: 'Join video call and receive medication guidance' } },
  12: { nurse: { th: 'ติดตามอาการ สร้างนัดครั้งถัดไป และตรวจสอบยอดค้างชำระ', en: 'Follow up, create the next appointment and check unpaid balance' }, patient: { th: 'รับการติดตาม รับแจ้งเตือน และเข้ารอบนัดถัดไป', en: 'Receive follow-up, reminders and enter the next visit' } }
};

/* Visible role order and inline remarks shown directly under the Role cards. */
const ROLE_ORDER_BADGES = {
  6: true,
  7: true,
  8: true,
  10: true,
  11: true,
  12: true
};

const ROLE_INLINE_REMARKS = {
  1: {
    th: 'ข้อสังเกต: ขั้นตอนนี้มีหลายบทบาท ให้ดำเนินการตามลำดับงาน โดยไม่ยึดตำแหน่งหรือลำดับของบทบาท',
    en: 'Remark: This step involves multiple roles. Follow the workflow without relying on card position or role order.'
  },
  3: {
    th: 'ข้อสังเกต: ขั้นตอนนี้มีหลายบทบาท ให้ดำเนินการตามลำดับงาน โดยไม่ยึดตำแหน่งหรือลำดับของบทบาท',
    en: 'Remark: This step involves multiple roles. Follow the workflow without relying on card position or role order.'
  },
  5: {
    th: 'ข้อสังเกต: ขั้นตอนนี้มีหลายบทบาท ให้ดำเนินการตามลำดับงาน โดยไม่ยึดตำแหน่งหรือลำดับของบทบาท',
    en: 'Remark: This step involves multiple roles. Follow the workflow without relying on card position or role order.'
  }
};


steps.forEach(step => Object.assign(step, ACTUAL_STEP_META[step.id] || {}));

/* API labels shown only where BIT Telemedicine exchanges data with BITHIS. */
steps.find(step => step.id === 1).th.integration = ['ดึงข้อมูลผู้ป่วยเก่าจาก HN ในระบบ BITHIS'];
steps.find(step => step.id === 1).en.integration = ['Retrieve an existing patient record from BITHIS using HN'];
steps.find(step => step.id === 2).th.integration = ['สัญญาณชีพ'];
steps.find(step => step.id === 2).en.integration = ['Vital Signs'];
steps.find(step => step.id === 3).th.integration = ['ข้อมูลนัดหมาย', 'ข้อมูลแพทย์'];
steps.find(step => step.id === 3).en.integration = ['Appointment Data', 'Doctor Data'];
steps.find(step => step.id === 4).th.integration = [];
steps.find(step => step.id === 4).en.integration = [];
steps.find(step => step.id === 5).th.integration = [];
steps.find(step => step.id === 5).en.integration = [];
steps.find(step => step.id === 6).th.integration = [];
steps.find(step => step.id === 6).en.integration = [];
steps.find(step => step.id === 6).th.desc = 'พยาบาลคัดกรองผู้ป่วยและส่งต่อให้แพทย์ตรวจผ่าน Video Call ใน BIT Telemedicine โดย AI ช่วยถอดเสียง สรุป SOAP แนะนำ ICD-10 และสร้าง OPD Draft ให้แพทย์ตรวจสอบ';
steps.find(step => step.id === 6).en.desc = 'Nurse screening and doctor video consultation run in BIT Telemedicine. AI assists with transcript, SOAP, ICD-10 recommendations and an OPD draft for doctor review.';
steps.find(step => step.id === 7).th.integration = ['ค่าแพทย์ ค่ายา และค่าบริการโรงพยาบาล', 'สถานะการชำระเงิน'];
steps.find(step => step.id === 7).en.integration = ['Doctor, Medication and Hospital Charges', 'Payment Status'];
steps.find(step => step.id === 8).th.integration = ['ค่าจัดส่งเท่านั้น'];
steps.find(step => step.id === 8).en.integration = ['Delivery Fee Only'];
steps.find(step => step.id === 9).th.integration = [];
steps.find(step => step.id === 9).en.integration = [];
steps.find(step => step.id === 10).th.integration = [];
steps.find(step => step.id === 10).en.integration = [];
steps.find(step => step.id === 11).th.integration = [];
steps.find(step => step.id === 11).en.integration = [];
steps.find(step => step.id === 12).th.integration = ['ข้อมูลนัดหมายครั้งถัดไป', 'ข้อมูลแพทย์'];
steps.find(step => step.id === 12).en.integration = ['Next Appointment Data', 'Doctor Data'];

/* Feedback revision: role actions and workflows reviewed on 13 Sep 2026. */
steps.find(step => step.id === 3).th.features.push(
  'ผู้ป่วยแก้ไขหรือยกเลิกวันและเวลานัดได้ก่อนพยาบาลยืนยันนัดหมาย',
  'พยาบาลแก้ไขหรือยกเลิกวันและเวลานัดได้ตลอดเวลา'
);
steps.find(step => step.id === 3).en.features.push(
  'Patients may edit or cancel the appointment date/time before nurse confirmation',
  'Nurses may edit or cancel the appointment date/time at any time'
);

steps.find(step => step.id === 6).th.notes = [
  'สรุป FLOW เดิม: หมอคีย์ยาและค่าแพทย์ใน BITHIS พยาบาลคีย์ค่าบริการโรงพยาบาล (ถ้ามี) แล้ว BIT Telemedicine ดึงรายการยาและค่าใช้จ่ายมาให้พยาบาลตรวจสอบก่อนส่งให้ผู้ป่วยชำระผ่าน LINE OA; หลังชำระ BIT Telemedicine ส่งผลการชำระและค่าจัดส่งกลับ BITHIS เพื่อปิดบิล โดยการคีย์ยา/เวชภัณฑ์และตัด Stock ทำใน BITHIS โดยตรง',
  'สรุป FLOW ใหม่ที่โรงพยาบาลต้องการ: ดึงฐานข้อมูลยา/เวชภัณฑ์จาก BITHIS มาใช้ใน BIT Telemedicine; หมอคีย์ยาและค่าแพทย์ใน BIT Telemedicine พยาบาลคีย์ค่าบริการโรงพยาบาล (ถ้ามี) และตรวจสอบยอดก่อนส่งให้ผู้ป่วยชำระ; จากนั้น BIT Telemedicine ส่งรายการยา ค่าแพทย์ ค่ายา ค่าบริการ และค่าจัดส่งกลับ BITHIS เพื่อให้พยาบาล Insert และส่งการเงินปิดบิล',
  'ทั้ง 2 Flow ต้องให้ยอดค่าใช้จ่ายใน BIT Telemedicine และ BITHIS เท่ากัน',
  'FLOW ใหม่ยังต้องยืนยัน Medication Database/API และขั้นตอน/ผู้รับผิดชอบการกดตัด Stock ยา',
  'SOAP ย่อมาจาก Subjective, Objective, Assessment และ Plan โดย AI สร้างร่าง และแพทย์เป็นผู้ตรวจสอบ แก้ไข และยืนยัน'
];
steps.find(step => step.id === 6).en.notes = [
  'CURRENT FLOW summary: the doctor enters medication and doctor fees in BITHIS; the nurse enters hospital service charges if applicable; BIT Telemedicine retrieves medication and charges for nurse review before payment through LINE OA; after payment, BIT Telemedicine returns payment status and delivery fee to BITHIS for bill closing. Medication entry and stock deduction stay in BITHIS.',
  'PROPOSED FLOW summary: retrieve the BITHIS medication/supply database into BIT Telemedicine; the doctor enters medication and doctor fees in BIT Telemedicine; the nurse enters hospital service charges if applicable and reviews the total before sending it to the patient; BIT Telemedicine then returns medication, doctor fee, medication fee, hospital service charge and delivery fee to BITHIS for nurse insertion and cashier bill closing.',
  'Both flows require the totals in BIT Telemedicine and BITHIS to match.',
  'The proposed flow still requires confirmation of the medication database/API and the medication stock-deduction owner/process.',
  'SOAP stands for Subjective, Objective, Assessment and Plan. AI creates the draft; the doctor reviews, edits and confirms it.'
];

steps.find(step => step.id === 8).th.integration = ['รอยืนยัน: API ค่าจัดส่งขึ้นอยู่กับ Flow ค่าใช้จ่ายที่ทีมเลือก'];
steps.find(step => step.id === 8).en.integration = ['Pending confirmation: delivery-fee API depends on the selected billing flow'];
steps.find(step => step.id === 8).th.notes = [
  'FLOW เดิม: ค่าใช้จ่ายหลักอยู่ใน BITHIS และส่งค่าจัดส่งจาก BIT Telemedicine กลับไป BITHIS ก่อนปิดบิล',
  'FLOW ใหม่ที่เสนอ: รวมรายการยา ค่าแพทย์ ค่าบริการโรงพยาบาล และค่าจัดส่งใน BIT Telemedicine แล้วส่งกลับ BITHIS เพื่อปิดบิล',
  'ยังไม่ Final Workflow — ต้องยืนยันว่า API ในขั้นตอนนี้ส่งเฉพาะค่าจัดส่ง หรือส่งค่าใช้จ่ายทั้งหมดตาม Flow ใหม่'
];
steps.find(step => step.id === 8).en.notes = [
  'CURRENT FLOW: Core charges remain in BITHIS and BIT Telemedicine sends the delivery fee back to BITHIS before bill closing.',
  'PROPOSED FLOW: Combine medication, doctor, hospital-service and delivery charges in BIT Telemedicine, then send all charges to BITHIS for bill closing.',
  'Not Final Workflow — confirm whether this API sends only the delivery fee or all charges under the proposed flow.'
];

steps.find(step => step.id === 9).th.features = steps.find(step => step.id === 9).th.features
  .filter(item => !/เภสัชกร/.test(item));
steps.find(step => step.id === 9).en.features = steps.find(step => step.id === 9).en.features
  .filter(item => !/pharmacist/i.test(item));
steps.find(step => step.id === 9).th.flow = ['ผู้ป่วยยืนยันว่าได้รับยาแล้ว', 'อัปโหลดรูปภาพ / วิดีโอ', 'ผู้ป่วยตรวจสอบยา', 'เข้าสู่ขั้นตอนนัดหมายเภสัชกร'];
steps.find(step => step.id === 9).en.flow = ['Patient Confirms Medication Received', 'Upload Photo / Video', 'Patient Verifies Medication', 'Continue to Pharmacist Appointment'];

steps.find(step => step.id === 12).th.features = [
  'พยาบาลติดตามอาการและประเมินว่าต้องนัดหมายครั้งถัดไปหรือไม่',
  'พยาบาลสร้างหรือแก้ไขนัดหมายครั้งถัดไปตาม Workflow ที่ได้รับการยืนยัน',
  'ส่ง Reminder และ Notification ผ่าน LINE OA',
  'ผู้ป่วยดูรายละเอียดนัดหมายครั้งถัดไปและเข้าสู่ Appointment Journey'
];
steps.find(step => step.id === 12).en.features = [
  'Nurse follows up and assesses whether another appointment is required',
  'Nurse creates or updates the next appointment under the confirmed workflow',
  'Send reminders and notifications through LINE OA',
  'Patient views the next appointment and returns to the Appointment Journey'
];

/* Remove former claims that Step 09 sends dispensing status to BITHIS. */
steps.find(step => step.id === 9).th.notes = [
  'การอัปโหลดรูปภาพหรือวิดีโอใช้เป็นขั้นตอนยืนยันก่อนการให้คำปรึกษาเรื่องยา',
  'ขั้นตอนนี้ดำเนินการใน BIT Telemedicine ผ่าน LINE OA (LIFF App) และไม่มี API เชื่อมไป BITHIS',
  'ขั้นตอนนี้เป็นจุดเชื่อมจาก Delivery ไปสู่ Pharmacist Care'
];
steps.find(step => step.id === 9).en.notes = [
  'Photo/video verification is completed before medication counseling.',
  'This step is completed in BIT Telemedicine through LINE OA (LIFF App) and has no BITHIS API.',
  'This step connects medication delivery with pharmacist care.'
];

steps.find(step => step.id === 10).th.notes = [
  'หลักการเช็กอินภายใน 15 นาทีก่อนเวลานัดใช้แนวทางเดียวกับการนัดหมายแพทย์',
  'ขั้นตอนนี้ดำเนินการใน BIT Telemedicine ผ่าน LINE OA (LIFF App) หลังผู้ป่วยได้รับยาและ Verify ยาแล้ว',
  'ยังไม่ Final Workflow — URL สำหรับ Pharmacist Portal และเงื่อนไขเปิด Video Call ต้องตรวจสอบกับทีมอีกครั้ง'
];
steps.find(step => step.id === 10).en.notes = [
  'The 15-minute check-in rule follows the doctor appointment principle.',
  'This step runs in BIT Telemedicine through LINE OA (LIFF App) after medication receipt and verification.',
  'Not Final Workflow — confirm the Pharmacist Portal URL and Video Call activation rule with the team.'
];

steps.find(step => step.id === 11).th.notes = [
  'ขั้นตอนนี้ดำเนินการใน BIT Telemedicine ผ่าน LINE OA (LIFF App) และไม่มี API เชื่อมไป BITHIS',
  'ข้อมูล Counseling ต้องผูกกับ Visit หรือ Appointment ที่เกี่ยวข้อง',
  'บันทึกการให้คำปรึกษาต้องดูย้อนหลังได้ตามสิทธิ์ของผู้ใช้งาน'
];
steps.find(step => step.id === 11).en.notes = [
  'This step runs in BIT Telemedicine through LINE OA (LIFF App) and has no BITHIS API.',
  'Counseling data must be linked to the related Visit or Appointment.',
  'Counseling history must be available according to role permissions.'
];

steps.find(step => step.id === 12).th.notes = [
  'ยังไม่ Final Workflow — ต้องยืนยันตำแหน่งของขั้นตอนนัดติดตามใน Patient Journey กับทีมอีกครั้ง',
  'ผู้ป่วยที่ยังไม่ชำระเงิน: แจ้งเตือนให้ชำระภายใน 1, 6, 12 และ 24 ชั่วโมง และ Block การนัดครั้งถัดไป',
  'ยังไม่ Final Workflow — ต้องยืนยัน Reminder Logic และเงื่อนไข Block นัดกับทีมอีกครั้ง',
  'กรณีพยาบาลทำนัดให้ผู้ป่วยที่ค้างชำระ ให้แสดง Pop-up แจ้งเตือน แต่ยังมีปุ่มดำเนินการต่อได้',
  'ยังไม่ Final Workflow — ต้องกำหนดปัญหา/เหตุผลที่พยาบาลเลือกก่อนดำเนินการต่อ',
  'หากไม่ต้องติดตามต่อ สามารถปิด Visit เป็น Completed ได้'
];
steps.find(step => step.id === 12).en.notes = [
  'Not Final Workflow — confirm the position of follow-up scheduling in the Patient Journey with the team.',
  'Unpaid patient: send payment reminders at 1, 6, 12 and 24 hours and block the next appointment.',
  'Not Final Workflow — confirm reminder logic and appointment-blocking rules with the team.',
  'When a nurse schedules for an unpaid patient, show a warning pop-up but allow an authorised continuation.',
  'Not Final Workflow — define the issue/reason required before the nurse continues.',
  'If no follow-up is required, the Visit may be closed as Completed.'
];
/* =========================================================
   PART 5/5
   WEBSITE INTERACTION
   ========================================================= */

let currentLang = 'th';
let currentStepId = 1;
let activeAudio = null;



/* =========================================================
   FINAL REQUIREMENT GUARDS — 13 SEP 2026
   Keep these AFTER all step mutations so older source content cannot
   reintroduce removed roles/API items.
   ========================================================= */
{
  const step3 = steps.find(step => step.id === 3);
  if (step3) {
    step3.roles = ['patient', 'nurse'];
    step3.hasBithisApi = true;
    step3.th.integration = ['เชื่อมข้อมูลนัดหมาย', 'ข้อมูลแพทย์'];
    step3.en.integration = ['Appointment Sync', 'Doctor Information'];
  }

  const step5 = steps.find(step => step.id === 5);
  if (step5) {
    step5.roles = ['nurse', 'doctor'];
    step5.hasBithisApi = false;
  }

  const step9 = steps.find(step => step.id === 9);
  if (step9) {
    step9.roles = ['patient'];
    step9.hasBithisApi = false;
    step9.th.integration = [];
    step9.en.integration = [];
  }
}

/* =========================================================
   UI TEXT
   ========================================================= */

const UI_TEXT = {

  th: {
    journeyTitle:
      'เส้นทางการดูแลผู้ป่วย 11 ขั้นตอน',

    journeySubtitle:
      'กระบวนการดูแลผู้ป่วยแบบครบวงจรและเชื่อมโยงข้อมูล',

    journeyDescription:
      'เลือกขั้นตอนที่ต้องการ เพื่อดูฟังก์ชันสำคัญ ประโยชน์ ขั้นตอนการทำงาน การเชื่อมต่อ BITHIS / API และระบบปัจจุบันที่เกี่ยวข้อง',

    keyFeatures:
      'ฟังก์ชันสำคัญ',

    benefits:
      'ประโยชน์',

    workflow:
      'ขั้นตอนการทำงาน',

    integration:
      'การเชื่อมต่อระบบ / API กับระบบ BITHIS',

    devNote:
      'หมายเหตุสำหรับทีมพัฒนา',

    listen:
      'ฟังคำอธิบาย',

    stop:
      'หยุดเสียง',

    viewSystem:
      'ดูระบบปัจจุบัน',

    pendingSystem:
      'รอยืนยันลิงก์ระบบ',

    previous:
      'ขั้นตอนก่อนหน้า',

    next:
      'ขั้นตอนถัดไป',

    existing:
      'มีในระบบเดิม',

    modify:
      'ปรับแก้',

    new:
      'พัฒนาใหม่',

    pending:
      'รอยืนยัน',

    attention:
      'ต้องตรวจสอบ',

    remarksTitle:
      'ข้อกำหนดที่ใช้ร่วมกันทั้งระบบ',

    remarksSubtitle:
      'ข้อกำหนดและแนวทางที่ใช้ร่วมกันตลอดเส้นทางการดูแลผู้ป่วย',

    lineNotificationTitle:
      'การแจ้งเตือนจาก Life Line App ผ่าน LINE OA',

    lineNotificationText:
      'การแจ้งเตือนสำคัญที่เกิดขึ้นใน Life Line App ต้องส่งเป็น Push Message ผ่าน LINE OA พร้อมปุ่มหรือ Deep Link ไปยังหน้าที่เกี่ยวข้องใน Life Line App',

    lineSupportTitle:
      'บริการช่วยเหลือผู้ป่วยผ่าน LINE OA',

    lineSupportText:
      'รองรับคู่มือการใช้งาน การแก้ไขปัญหา คำถามที่พบบ่อย และการติดต่อเจ้าหน้าที่ผ่าน LINE Official Account',

    lineSupportDemo:
      'ดูตัวอย่าง LINE OA Support',

    roleTitle:
      'รูปแบบหน้าจอตามบทบาทผู้ใช้งาน',

    roleText:
      'พยาบาลใช้ธีมสีชมพู แพทย์ใช้ธีมสีน้ำเงิน และเภสัชกรใช้ธีมสีเขียว พร้อมปุ่มออกจากระบบบริเวณด้านล่างของ Sidebar',

    bithisTitle:
      'การเชื่อมต่อระบบ / API กับระบบ BITHIS',

    bithisText:
      'เชื่อมข้อมูลผู้ป่วยและ HN สัญญาณชีพ การนัดหมาย ข้อมูลทางคลินิก ค่าใช้จ่าย สถานะการจ่ายยา และข้อมูลที่เกี่ยวข้องกับ Workflow ของโรงพยาบาล',

    pendingTitle:
      'หัวข้อที่รอยืนยัน',

    pendingText:
      'ฐานข้อมูลรายการยา แหล่งข้อมูลค่าใช้จ่าย Payment Gateway ช่วงเวลาการคิดค่าจัดส่ง และ URL สำหรับ Pharmacist Portal ยังอยู่ระหว่างการยืนยัน',

    audioMissing:
      'ยังไม่ได้เพิ่มไฟล์เสียงสำหรับขั้นตอนนี้'
  },


  en: {
    journeyTitle:
      '11-Step Patient Journey',

    journeySubtitle:
      'End-to-end connected patient care journey',

    journeyDescription:
      'Select a step to review Key Features, Benefits, Workflow, BITHIS/API Integration and the related current system.',

    keyFeatures:
      'Key Features',

    benefits:
      'Benefits',

    workflow:
      'Workflow Overview',

    integration:
      'BIT Telemedicine / BITHIS API Integration',

    devNote:
      'Dev Note / Remark',

    listen:
      'Listen',

    stop:
      'Stop',

    viewSystem:
      'View Current System',

    pendingSystem:
      'System Link Pending',

    previous:
      'Previous Step',

    next:
      'Next Step',

    existing:
      'Existing',

    modify:
      'Modify',

    new:
      'New',

    pending:
      'Pending',

    attention:
      'Attention',

    remarksTitle:
      'System-wide Remarks',

    remarksSubtitle:
      'Requirements applied across the entire patient journey',

    lineNotificationTitle:
      'Life Line App → LINE OA Notification',

    lineNotificationText:
      'Important notifications generated in the Life Line App will also be sent as push message notifications via LINE OA, with deep links to the relevant Life Line App screen.',

    lineSupportTitle:
      'LINE OA Patient Support',

    lineSupportText:
      'Patient support is available through LINE Official Account, including Quick Manual, Troubleshooting & FAQ, and Contact Staff.',

    lineSupportDemo:
      'View LINE OA Support Demo',

    roleTitle:
      'Role-based Workspace',

    roleText:
      'Nurse = Pink Theme · Doctor = Blue Theme · Pharmacist = Green Theme, with Log Out at the bottom of the sidebar.',

    bithisTitle:
      'System / API Integration with BITHIS',

    bithisText:
      'Connect patient/HN, vital signs, appointments, clinical data, charges, dispensing status and related hospital workflow data.',

    pendingTitle:
      'Pending Confirmation',

    pendingText:
      'Medication Master Database, charge source, payment gateway, delivery fee timing and Pharmacist Portal URL are still pending confirmation.',

    audioMissing:
      'Audio narration has not been added for this step yet.'
  }

};


/* =========================================================
   OVERVIEW CONTENT
   ========================================================= */

const OVERVIEW_CONTENT = {

  th: [
    {
      title: 'เชื่อมต่อระบบโรงพยาบาล',
      detail: 'HN · BITHIS · สัญญาณชีพ · ข้อมูลทางคลินิก'
    },
    {
      title: 'AI ช่วยงานด้านคลินิก',
      detail: 'Transcript · SOAP · ICD-10 · ร่าง OPD'
    },
    {
      title: 'เส้นทางการดูแลครบวงจร',
      detail: 'ลงทะเบียน → ติดตามหลังการรักษา'
    },
    {
      title: 'เชื่อมต่อผู้ป่วยอย่างต่อเนื่อง',
      detail: 'Life Line App + LINE OA'
    },
    {
      title: 'การดูแลด้านยาแบบครบวงจร',
      detail: 'ใบสั่งยา → จัดส่ง → เภสัชกร → ติดตาม'
    }
  ],


  en: [
    {
      title: 'Hospital Integrated',
      detail: 'HN · BITHIS · Vital Signs · Clinical Data'
    },
    {
      title: 'AI-assisted Clinical Care',
      detail: 'Transcript · SOAP · ICD-10 · OPD Draft'
    },
    {
      title: 'End-to-End Journey',
      detail: 'Registration to Follow-up'
    },
    {
      title: 'Connected Patient Engagement',
      detail: 'Life Line App + LINE OA'
    },
    {
      title: 'Closed-loop Medication Care',
      detail: 'Prescription → Delivery → Pharmacist → Follow-up'
    }
  ]

};


/* =========================================================
   API MAP CONTENT
   ========================================================= */

const API_MAP_CONTENT = {

  th: {

    eyebrow:
      'การเชื่อมต่อระบบ / API กับระบบ BITHIS',

    title:
      'จุดเชื่อมต่อข้อมูลสำคัญตลอดเส้นทางการดูแลผู้ป่วย',

    nodes: [
      {
        title: 'ผู้ป่วย / HN',
        detail: 'ตรวจสอบและจับคู่ข้อมูลผู้ป่วยกับ BITHIS'
      },
      {
        title: 'สัญญาณชีพ',
        detail: 'การคัดกรองโดยพยาบาล → BITHIS'
      },
      {
        title: 'การนัดหมาย',
        detail: 'นัดหมาย / แพทย์ / สถานะ'
      },
      {
        title: 'ข้อมูลทางคลินิก / OPD',
        detail: 'SOAP · ICD-10 · OPD'
      },
      {
        title: 'ฐานข้อมูลรายการยา',
        detail: 'รอยืนยันฐานข้อมูลรายการยาจาก BITHIS'
      },
      {
        title: 'ค่าใช้จ่าย',
        detail: 'ค่าแพทย์ · ค่ายา · ค่าบริการพยาบาล'
      },
      {
        title: 'สถานะการชำระเงิน',
        detail: 'รอชำระ → ชำระสำเร็จ / ไม่สำเร็จ'
      },
      {
        title: 'การจ่ายยา',
        detail: 'รายการยา / สถานะการจ่ายยา'
      },
      {
        title: 'ค่าจัดส่ง',
        detail: 'เพิ่มค่าจัดส่งเป็น Charge ผ่าน API → BITHIS'
      }
    ],

    legend: [
      'มีในระบบเดิม / ยืนยันแล้ว',
      'ปรับแก้',
      'พัฒนาใหม่',
      'รอยืนยัน'
    ]
  },


  en: {

    eyebrow:
      'BITHIS / API INTEGRATION',

    title:
      'Key Integration Points Across the Patient Journey',

    nodes: [
      {
        title: 'Patient / HN',
        detail: 'BITHIS Patient Matching'
      },
      {
        title: 'Vital Signs',
        detail: 'Nurse Screening → BITHIS'
      },
      {
        title: 'Appointment',
        detail: 'Appointment / Doctor / Status'
      },
      {
        title: 'Clinical / OPD',
        detail: 'SOAP · ICD-10 · OPD'
      },
      {
        title: 'Medication Master',
        detail: 'Pending BITHIS Medication Database'
      },
      {
        title: 'Billing & Charges',
        detail: 'Doctor · Medication · Nursing Fee'
      },
      {
        title: 'Payment Status',
        detail: 'Pending → Paid / Failed'
      },
      {
        title: 'Dispensing',
        detail: 'Medication / Dispensing Status'
      },
      {
        title: 'Delivery Fee',
        detail: 'Insert Delivery Charge via API → BITHIS'
      }
    ],

    legend: [
      'Existing / Confirmed',
      'Modify',
      'New',
      'Pending Confirmation'
    ]
  }

};


/* =========================================================
   STATUS
   ========================================================= */

function getStatusLabel(status) {

  const text =
    UI_TEXT[currentLang];

  const labels = {
    existing: text.existing,
    modify: text.modify,
    new: text.new,
    pending: text.pending,
    attention: text.attention
  };

  return labels[status] || status;

}


function renderStatusBadges(statusList = []) {

  return statusList
    .map(
      status => `
        <span
          class="status-badge status-${status}"
        >
          ${getStatusLabel(status)}
        </span>
      `
    )
    .join('');

}


/* =========================================================
   CURRENT SYSTEM — ROLE-BASED LINKS
   ========================================================= */

function getRoleSystemUrl(roleId) {
  return CURRENT_SYSTEM[roleId] || '';
}

function renderRoleSystemButton(roleId) {
  const url = getRoleSystemUrl(roleId);
  const viewLabel = currentLang === 'th'
    ? 'ดูระบบปัจจุบัน'
    : 'View Current System';

  if (roleId === 'cashier') {
    return '';
  }

  if (roleId === 'pharmacist' && !url) {
    return `
      <button
        class="role-system-btn role-system-btn-pending"
        type="button"
        disabled
        title="${currentLang === 'th' ? 'รอสร้างบัญชี / ยืนยันลิงก์สำหรับเภสัชกร' : 'Pharmacist account / link pending'}"
      >
        <span aria-hidden="true">↗</span>
        ${currentLang === 'th' ? 'รอสร้างบัญชี' : 'Account Pending'}
      </button>
    `;
  }

  if (!url) {
    return '';
  }

  return `
    <a
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      class="role-system-btn"
    >
      <span aria-hidden="true">↗</span>
      ${viewLabel}
    </a>
  `;
}

function escapeContentAttribute(value = '') {
  let popupText = String(value);

  if (/SOAP/i.test(popupText)) {
    popupText += currentLang === 'th'
      ? ' — SOAP ย่อมาจาก Subjective, Objective, Assessment และ Plan เป็นรูปแบบการบันทึกข้อมูลทางคลินิก โดย AI ช่วยสร้างร่าง และแพทย์ต้องตรวจสอบ แก้ไข และยืนยันก่อนบันทึก Final'
      : ' — SOAP stands for Subjective, Objective, Assessment and Plan. AI generates a clinical draft, and the doctor must review, edit and confirm it before finalization.';
  }

  return popupText
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isPendingContent(value = '') {
  return /ยังไม่ Final Workflow|รอยืนยัน|Pending confirmation|Not Final Workflow/i.test(String(value));
}

function renderStep08ApiRemark(step) {
  if (step.id !== 8) return '';

  const items = currentLang === 'th'
    ? [
        '<strong>Flow 1 — คีย์ยาจาก BIT Telemedicine:</strong> อาจต้องเชื่อมต่อ API ไปยัง BITHIS เพื่อตัด Stock ยา',
        '<strong>Flow 2 — คีย์ยาจาก BITHIS:</strong> ตัด Stock ยาใน BITHIS โดยตรง จึงไม่ต้องทำ API เพื่อตัด Stock ยาซ้ำ',
        '<strong>รอยืนยัน:</strong> ต้องสรุป Final Flow ก่อน จึงจะกำหนด API Specification ได้'
      ]
    : [
        '<strong>Flow 1 — Medication entered in BIT Telemedicine:</strong> An API integration with BITHIS may be required to deduct medication stock.',
        '<strong>Flow 2 — Medication entered in BITHIS:</strong> Stock is deducted directly in BITHIS, so no additional stock-deduction API is required.',
        '<strong>Pending confirmation:</strong> The final workflow must be confirmed before the API specification can be finalized.'
      ];

  return `
    <div class="api-step-remark">
      <div class="api-step-remark-title">${currentLang === 'th' ? 'ข้อสังเกต' : 'Remark'}</div>
      <ul class="api-step-remark-list">
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderRoleSummary(step) {
  const roles = step.roles || (step.role ? [step.role] : []);
  if (!roles.length) return '';

  const showOrderBadges = Boolean(ROLE_ORDER_BADGES[step.id]) && roles.length > 1;
  const inlineRemark = ROLE_INLINE_REMARKS[step.id]?.[currentLang] || '';
  const inlineRemarkHtml = Array.isArray(inlineRemark)
    ? `<div class="role-inline-remark"><strong class="role-inline-remark-title">${currentLang === 'th' ? 'ข้อสังเกต' : 'Remark'}</strong><ul>${inlineRemark.map(item => `<li>${item}</li>`).join('')}</ul></div>`
    : (inlineRemark
        ? `<div class="role-inline-remark"><strong>${currentLang === 'th' ? 'ข้อสังเกต:' : 'Remark:'}</strong> ${inlineRemark.replace(/^(Remark|หมายเหตุ|ข้อสังเกต):\s*/i, '')}</div>`
        : '');

  return `
    <div class="step-role-row" aria-label="${currentLang === 'th' ? 'ผู้เกี่ยวข้องในขั้นตอนนี้' : 'Roles in this step'}">
      ${roles.map((roleId, roleIndex) => {
        const meta = ROLE_META[roleId];
        if (!meta) return '';
        const label = currentLang === 'th' ? meta.th : meta.en;
        const system = currentLang === 'th' ? meta.systemTh : meta.systemEn;
        const action = ROLE_ACTIONS[step.id]?.[roleId]?.[currentLang] || '';
        const orderBadge = showOrderBadges
          ? `<span class="role-order-badge" aria-label="${currentLang === 'th' ? 'ลำดับที่' : 'Order'} ${roleIndex + 1}">${roleIndex + 1}</span>`
          : '';

        return `<div class="step-role-chip role-${roleId} content-hover" data-role="${roleId}" tabindex="0" data-popup="${escapeContentAttribute(`${label}: ${action} • ${system}`)}">
          ${orderBadge}
          <div class="step-role-head">
            <img src="image/${meta.icon}" class="step-role-icon" alt="">
            <span class="step-role-copy">
              <strong>${label}</strong>
              <small class="step-role-system">${meta.platformIcon
                ? `<img src="image/${meta.platformIcon}" class="platform-icon" alt="">`
                : `<span class="platform-icon-text" aria-hidden="true">HIS</span>`
              }${system}</small>
            </span>
          </div>
          <div class="step-role-footer">
            <small class="step-role-action">${action}</small>
            ${renderRoleSystemButton(roleId)}
          </div>
        </div>`;
      }).join('')}
    </div>
    ${inlineRemarkHtml}
  `;
}


/* =========================================================
   STEP PATH
   ========================================================= */

function renderStepNavigation() {

  const nav =
    document.getElementById(
      'step-nav'
    );

  if (!nav) {
    return;
  }


  nav.innerHTML =
    steps
      .map(step => {

        const data =
          step[currentLang];

        const isActive =
          step.id === currentStepId;

        const isCompleted =
          step.id < currentStepId;

        const isReached =
          step.id <= currentStepId;


        return `

          <button
            class="
              journey-step
              ${isActive ? 'active' : ''}
              ${isCompleted ? 'completed' : ''}
              ${isReached ? 'reached' : ''}
            "
            data-step="${step.id}"
            type="button"
            aria-label="${data.title}"
            title="${data.title}"
          >

            <div
              class="journey-step-inner"
            >

              <div
                class="journey-step-icon-wrap"
              >

                <img
                  src="image/${step.icon}"
                  alt=""
                  class="journey-step-icon"
                >

              </div>


              <div
                class="journey-step-text"
              >

                <span
                  class="journey-step-number"
                >
                  ${String(step.id).padStart(2, '0')}
                </span>


                <span
                  class="journey-step-title"
                >
                  ${data.short}
                </span>

                ${step.hasBithisApi ? `<img src="image/API-BIT.png" class="journey-api-icon" alt="API: BIT Telemedicine เชื่อมต่อ BITHIS">` : ''}

              </div>

            </div>

          </button>

        `;

      })
      .join('');


  nav
    .querySelectorAll(
      '.journey-step'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          openStep(
            Number(
              button.dataset.step
            )
          );

        }
      );

    });

}


/* =========================================================
   CONTENT RENDER HELPERS
   ========================================================= */

function renderFeatureList(items = []) {

  return `

    <div class="feature-grid">

      ${
        items
          .map(
            item => `

              <div class="feature-item content-hover" tabindex="0" data-popup="${escapeContentAttribute(item)}">

                <span class="feature-check">
                  ✓
                </span>

                <span>
                  ${item}
                </span>

              </div>

            `
          )
          .join('')
      }

    </div>

  `;

}


function renderBenefitList(items = []) {

  return `

    <div class="benefit-grid">

      ${
        items
          .map(
            item => `

              <div class="benefit-card content-hover" tabindex="0" data-popup="${escapeContentAttribute(item)}">

                <div class="benefit-icon">
                  ✦
                </div>

                <div>
                  ${item}
                </div>

              </div>

            `
          )
          .join('')
      }

    </div>

  `;

}


function renderFlow(items = []) {

  return `

    <div class="workflow-flow">

      ${
        items
          .map(
            (item, index) => `

              <div class="flow-node content-hover" tabindex="0" data-popup="${escapeContentAttribute(item)}">
                <span class="workflow-order" aria-hidden="true">${index + 1}</span>
                <span class="workflow-label">${item}</span>
              </div>

              ${
                index < items.length - 1
                  ? `
                    <div class="flow-arrow" aria-hidden="true">
                      →
                    </div>
                  `
                  : ''
              }

            `
          )
          .join('')
      }

    </div>

  `;

}


function renderIntegration(items = [], hasBithisApi = false) {

  if (!hasBithisApi) {
    return `<div class="no-bithis-api"><strong>${currentLang === 'th' ? 'ไม่มี API เชื่อมไป BITHIS' : 'No BITHIS API'}</strong><span>${currentLang === 'th' ? 'ขั้นตอนนี้ดำเนินการภายใน BIT Telemedicine' : 'This step runs within BIT Telemedicine.'}</span></div>`;
  }

  return `

    <div class="integration-tags">

      ${
        items
          .map(
            item => `

              <span class="integration-tag content-hover ${isPendingContent(item) ? 'pending-workflow' : ''}" tabindex="0" data-popup="${escapeContentAttribute(item)}">
                <img src="image/API-BIT.png" class="inline-api-icon" alt=""> API · ${item}
              </span>

            `
          )
          .join('')
      }

    </div>

  `;

}


function renderNotes(items = []) {

  return `

    <div class="dev-note-list">

      ${
        items
          .map(
            item => `

              <div class="dev-note-item content-hover ${isPendingContent(item) ? 'pending-workflow' : ''}" tabindex="0" data-popup="${escapeContentAttribute(item)}">

                <span class="dev-note-dot">
                  !
                </span>

                <span>
                  ${item}
                </span>

              </div>

            `
          )
          .join('')
      }

    </div>

  `;

}


/* =========================================================
   ACCORDION TEMPLATE
   ========================================================= */

function accordionSection(
  number,
  title,
  content,
  open = false,
  extraClass = ''
) {

  return `

    <section
      class="
        step-section
        accordion-section
        ${extraClass}
        ${open ? 'open' : ''}
      "
    >

      <button
        class="accordion-toggle"
        type="button"
        aria-expanded="${open}"
      >

        <span class="accordion-heading">

          <span class="section-number">
            ${number}
          </span>

          <span class="accordion-title">
            ${title}
          </span>

        </span>


        <span
          class="accordion-chevron"
          aria-hidden="true"
        >
          ${open ? '⌃' : '⌄'}
        </span>

      </button>


      <div
        class="accordion-content"
        ${open ? '' : 'hidden'}
      >
        ${content}
      </div>

    </section>

  `;

}


/* =========================================================
   MAIN STEP CARD
   ========================================================= */

function renderCurrentStep() {

  const container =
    document.getElementById(
      'step-content'
    );

  if (!container) {
    return;
  }


  const step =
    steps.find(
      item =>
        item.id === currentStepId
    );

  if (!step) {
    return;
  }


  const data =
    step[currentLang];

  const text =
    UI_TEXT[currentLang];

  const prevStep =
    steps.find(
      item =>
        item.id ===
        currentStepId - 1
    );

  const nextStep =
    steps.find(
      item =>
        item.id ===
        currentStepId + 1
    );


  container.innerHTML = `

    <article
      class="step-card"
      data-step-id="${step.id}"
    >

      <header class="step-card-header">

        <div class="step-heading">

          <div class="step-main-icon-wrap">

            <img
              src="image/${step.icon}"
              class="step-main-icon"
              alt=""
            >

          </div>


          <div class="step-heading-copy">

            <div class="step-eyebrow">

              ${
                currentLang === 'th'
                  ? 'ขั้นตอน'
                  : 'STEP'
              }

              ${String(step.id).padStart(2, '0')}

            </div>


            <h2 class="step-title">
              ${data.title}
            </h2>


            <p class="step-description">
              ${data.desc}
            </p>


            <div class="step-status-row">
              ${renderStatusBadges(data.status)}
            </div>

            ${renderRoleSummary(step)}

          </div>

        </div>


        <div class="step-actions">

          <button
            class="action-btn audio-btn"
            type="button"
            id="audio-btn"
          >

            <span class="action-icon">
              🔊
            </span>

            <span id="audio-btn-text">
              ${text.listen}
            </span>

          </button>

        </div>

      </header>


      ${
        accordionSection(
          '01',
          text.keyFeatures,
          renderFeatureList(
            data.features
          ),
          true
        )
      }


      ${
        accordionSection(
          '02',
          text.benefits,
          renderBenefitList(
            data.benefits
          ),
          false,
          'benefit-section'
        )
      }


      ${
        accordionSection(
          '03',
          text.workflow,
          renderFlow(
            data.flow
          )
        )
      }


      ${
        accordionSection(
          '04',
          text.integration,
          `${renderIntegration(
            data.integration,
            step.hasBithisApi
          )}${renderStep08ApiRemark(step)}`
        )
      }


      ${
        accordionSection(
          '05',
          text.devNote,
          renderNotes(
            data.notes
          ),
          false,
          'dev-note-section'
        )
      }


      <footer class="step-navigation">

        <button
          class="nav-step-btn"
          type="button"
          id="previous-step"
          ${!prevStep ? 'disabled' : ''}
        >
          ← ${text.previous}
        </button>


        <div class="step-counter">

          ${String(currentStepId).padStart(2, '0')}
          /
          ${String(steps.length).padStart(2, '0')}

        </div>


        <button
          class="nav-step-btn primary"
          type="button"
          id="next-step"
          ${!nextStep ? 'disabled' : ''}
        >
          ${text.next} →
        </button>

      </footer>

    </article>

  `;


  bindStepCardEvents();

}


/* =========================================================
   ACCORDION
   ========================================================= */

function bindStepAccordions() {

  document
    .querySelectorAll(
      '.accordion-toggle'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const section =
            button.closest(
              '.accordion-section'
            );

          const content =
            section?.querySelector(
              '.accordion-content'
            );

          const chevron =
            button.querySelector(
              '.accordion-chevron'
            );


          if (
            !section ||
            !content
          ) {
            return;
          }


          const willOpen =
            !section.classList.contains(
              'open'
            );


          section.classList.toggle(
            'open',
            willOpen
          );

          content.hidden =
            !willOpen;

          button.setAttribute(
            'aria-expanded',
            String(willOpen)
          );


          if (chevron) {

            chevron.textContent =
              willOpen
                ? '⌃'
                : '⌄';

          }

        }
      );

    });

}


/* =========================================================
   STEP EVENTS
   ========================================================= */

function bindStepCardEvents() {

  bindStepAccordions();


  document
    .getElementById(
      'previous-step'
    )
    ?.addEventListener(
      'click',
      () => {

        if (
          currentStepId > 1
        ) {

          openStep(
            currentStepId - 1
          );

        }

      }
    );


  document
    .getElementById(
      'next-step'
    )
    ?.addEventListener(
      'click',
      () => {

        if (
          currentStepId <
          steps.length
        ) {

          openStep(
            currentStepId + 1
          );

        }

      }
    );


  document
    .getElementById(
      'audio-btn'
    )
    ?.addEventListener(
      'click',
      toggleStepAudio
    );

}


/* =========================================================
   OPEN STEP
   ========================================================= */

function openStep(stepId) {

  if (
    stepId < 1 ||
    stepId > steps.length
  ) {
    return;
  }


  stopAudio();

  currentStepId =
    stepId;


  renderStepNavigation();

  renderCurrentStep();


  requestAnimationFrame(
    () => {

      const target =
        document.getElementById(
          'step-content'
        ) ||
        document.getElementById(
          'presentation'
        );


      if (!target) {
        return;
      }


      const header =
        document.querySelector(
          '.site-header'
        );


      const headerHeight =
        header
          ? header.offsetHeight
          : 72;


      const targetTop =
        target
          .getBoundingClientRect()
          .top +
        window.pageYOffset;


      window.scrollTo({

        top:
          Math.max(
            0,
            targetTop -
            headerHeight -
            12
          ),

        behavior:
          'smooth'

      });

    }
  );

}


/* =========================================================
   AUDIO
   ========================================================= */

function getAudioPath() {

  return (
    `audio/step-${String(currentStepId).padStart(2, '0')}-${currentLang}.mp3`
  );

}


function toggleStepAudio() {

  const buttonText =
    document.getElementById(
      'audio-btn-text'
    );

  const text =
    UI_TEXT[currentLang];


  if (
    activeAudio &&
    !activeAudio.paused
  ) {

    stopAudio();

    return;

  }


  const audio =
    new Audio(
      getAudioPath()
    );


  activeAudio =
    audio;


  audio
    .play()
    .then(
      () => {

        if (buttonText) {

          buttonText.textContent =
            text.stop;

        }

      }
    )
    .catch(
      () => {

        activeAudio =
          null;


        if (buttonText) {

          buttonText.textContent =
            text.listen;

        }


        showToast(
          text.audioMissing
        );

      }
    );


  audio.addEventListener(
    'ended',
    () => {

      activeAudio =
        null;


      const currentButtonText =
        document.getElementById(
          'audio-btn-text'
        );


      if (currentButtonText) {

        currentButtonText.textContent =
          UI_TEXT[currentLang]
            .listen;

      }

    }
  );

}


function stopAudio() {

  if (activeAudio) {

    activeAudio.pause();

    activeAudio.currentTime =
      0;

    activeAudio =
      null;

  }


  const buttonText =
    document.getElementById(
      'audio-btn-text'
    );


  if (buttonText) {

    buttonText.textContent =
      UI_TEXT[currentLang]
        .listen;

  }

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function changeLanguage(lang) {

  if (
    !['th', 'en']
      .includes(lang)
  ) {
    return;
  }


  stopAudio();

  currentLang =
    lang;

  document.documentElement.lang =
    lang;


  updateLanguageButtons();

  updateStaticText();

  updateOverviewLanguage();

  updateApiMapLanguage();

  updateLineSupportShowcase();

  renderStepNavigation();

  renderCurrentStep();

  renderRemarks();

}


function updateLanguageButtons() {

  document
    .getElementById(
      'lang-th'
    )
    ?.classList.toggle(
      'active',
      currentLang === 'th'
    );


  document
    .getElementById(
      'lang-en'
    )
    ?.classList.toggle(
      'active',
      currentLang === 'en'
    );

}


/* =========================================================
   STATIC TEXT
   ========================================================= */

function updateStaticText() {

  const text =
    UI_TEXT[currentLang];


  const journeyTitle =
    document.getElementById(
      'journey-title'
    );

  const journeySubtitle =
    document.getElementById(
      'journey-subtitle'
    );

  const journeyDescription =
    document.querySelector(
      '.journey-description'
    );


  if (journeyTitle) {

    journeyTitle.textContent =
      text.journeyTitle;

  }


  if (journeySubtitle) {

    journeySubtitle.textContent =
      text.journeySubtitle;

  }


  if (journeyDescription) {

    journeyDescription.textContent =
      text.journeyDescription;

  }


  document
    .querySelectorAll(
      '[data-th][data-en]'
    )
    .forEach(element => {

      const translated =
        element.dataset[
          currentLang
        ];


      if (translated) {

        element.textContent =
          translated;

      }

    });

}


/* =========================================================
   OVERVIEW
   ========================================================= */

function updateOverviewLanguage() {

  const content =
    OVERVIEW_CONTENT[currentLang];


  document
    .querySelectorAll(
      '.value-strip article'
    )
    .forEach(
      (card, index) => {

        const item =
          content[index];

        if (!item) {
          return;
        }


        const title =
          card.querySelector(
            'b'
          );

        const detail =
          card.querySelector(
            'small'
          );


        if (title) {

          title.textContent =
            item.title;

        }


        if (detail) {

          detail.textContent =
            item.detail;

        }

      }
    );

}


/* =========================================================
   API MAP
   ========================================================= */

function updateApiMapLanguage() {

  const content =
    API_MAP_CONTENT[currentLang];

  const apiSection =
    document.getElementById(
      'api-map'
    );


  if (
    !apiSection ||
    !content
  ) {
    return;
  }


  const eyebrow =
    apiSection.querySelector(
      '.section-heading .eyebrow'
    );

  const title =
    apiSection.querySelector(
      '.section-heading h2'
    );


  if (eyebrow) {

    eyebrow.textContent =
      content.eyebrow;

  }


  if (title) {

    title.textContent =
      content.title;

  }


  apiSection
    .querySelectorAll(
      '.api-node'
    )
    .forEach(
      (node, index) => {

        const item =
          content.nodes[index];

        if (!item) {
          return;
        }


        const strong =
          node.querySelector(
            'strong'
          );

        const small =
          node.querySelector(
            'small'
          );


        if (strong) {

          strong.textContent =
            item.title;

        }


        if (small) {

          small.textContent =
            item.detail;

        }

      }
    );


  apiSection
    .querySelectorAll(
      '.status-legend > span > span'
    )
    .forEach(
      (item, index) => {

        if (
          content.legend[index]
        ) {

          item.textContent =
            content.legend[index];

        }

      }
    );

}


/* =========================================================
   LINE OA SUPPORT
   ========================================================= */

function updateLineSupportShowcase() {

  const section =
    document.querySelector(
      '.line-support-showcase'
    );


  if (!section) {
    return;
  }


  const eyebrow =
    section.querySelector(
      '.line-support-copy .eyebrow'
    );

  const title =
    section.querySelector(
      '.line-support-copy h3'
    );

  const paragraph =
    section.querySelector(
      '.line-support-copy > p:not(.eyebrow)'
    );


  if (eyebrow) {

    eyebrow.textContent =
      currentLang === 'th'
        ? 'บริการช่วยเหลือผู้ป่วย'
        : 'PATIENT SUPPORT';

  }


  if (title) {

    title.textContent =
      currentLang === 'th'
        ? 'บริการช่วยเหลือผ่าน LINE OA'
        : 'LINE OA Patient Support';

  }


  if (paragraph) {

    paragraph.textContent =
      currentLang === 'th'

        ? 'รองรับคู่มือการใช้งาน การแก้ไขปัญหา คำถามที่พบบ่อย และการติดต่อเจ้าหน้าที่ผ่าน LINE Official Account'

        : 'Quick Manual, Troubleshooting & FAQ, and Contact Staff are available through LINE Official Account.';

  }

}


/* =========================================================
   SYSTEM-WIDE REMARKS
   ========================================================= */

function renderRemarks() {

  const container =
    document.getElementById(
      'remarks-content'
    );


  if (!container) {
    return;
  }


  const text =
    UI_TEXT[currentLang];


  container.innerHTML = `

    <div class="remarks-heading">

      <span class="remarks-kicker">

        ${
          currentLang === 'th'
            ? 'หมายเหตุ'
            : 'REMARKS'
        }

      </span>


      <h2>
        ${text.remarksTitle}
      </h2>


      <p>
        ${text.remarksSubtitle}
      </p>

    </div>


    <div class="remarks-grid">


      <article class="remark-card line-card">

        <div class="remark-icon">
          🔔
        </div>

        <h3>
          ${text.lineNotificationTitle}
        </h3>

        <p>
          ${text.lineNotificationText}
        </p>

      </article>


      <article class="remark-card support-card">

        <div class="remark-support-layout">

          <img
            src="image/line-oa-support.png"
            alt="LINE OA Patient Support"
            class="remark-support-image"
          >


          <div>

            <h3>
              ${text.lineSupportTitle}
            </h3>

            <p>
              ${text.lineSupportText}
            </p>


            <button
              class="remark-action-btn"
              type="button"
              id="line-support-demo"
            >
              ▶ ${text.lineSupportDemo}
            </button>

          </div>

        </div>

      </article>


      <article class="remark-card role-card">

        <div class="remark-icon">
          👥
        </div>

        <h3>
          ${text.roleTitle}
        </h3>

        <p>
          ${text.roleText}
        </p>


        <div class="role-theme-row">

          <span class="role-chip nurse-chip">

            ${
              currentLang === 'th'
                ? 'พยาบาล'
                : 'Nurse'
            }

          </span>


          <span class="role-chip doctor-chip">

            ${
              currentLang === 'th'
                ? 'แพทย์'
                : 'Doctor'
            }

          </span>


          <span class="role-chip pharmacist-chip">

            ${
              currentLang === 'th'
                ? 'เภสัชกร'
                : 'Pharmacist'
            }

          </span>

        </div>

      </article>


      <article class="remark-card api-card">

        <div class="remark-icon">
          🔗
        </div>

        <h3>
          ${text.bithisTitle}
        </h3>

        <p>
          ${text.bithisText}
        </p>

      </article>


      <article class="remark-card pending-card">

        <div class="remark-icon">
          ⚪
        </div>

        <h3>
          ${text.pendingTitle}
        </h3>

        <p>
          ${text.pendingText}
        </p>

      </article>

    </div>

  `;


  document
    .getElementById(
      'line-support-demo'
    )
    ?.addEventListener(
      'click',
      () => {

        showToast(

          currentLang === 'th'

            ? 'สามารถเพิ่มวิดีโอสาธิต LINE OA Support ในภายหลังได้'

            : 'LINE OA Support demo video can be added later.'

        );

      }
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  let toast =
    document.getElementById(
      'toast'
    );


  if (!toast) {

    toast =
      document.createElement(
        'div'
      );


    toast.id =
      'toast';

    toast.className =
      'toast';


    document.body.appendChild(
      toast
    );

  }


  toast.textContent =
    message;


  toast.classList.add(
    'show'
  );


  window.clearTimeout(
    showToast.timeout
  );


  showToast.timeout =
    window.setTimeout(
      () => {

        toast.classList.remove(
          'show'
        );

      },
      2500
    );

}


/* =========================================================
   LANGUAGE BUTTON EVENTS
   ========================================================= */

function bindLanguageButtons() {

  document
    .getElementById(
      'lang-th'
    )
    ?.addEventListener(
      'click',
      () => {

        changeLanguage(
          'th'
        );

      }
    );


  document
    .getElementById(
      'lang-en'
    )
    ?.addEventListener(
      'click',
      () => {

        changeLanguage(
          'en'
        );

      }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

function bindKeyboardNavigation() {

  document.addEventListener(
    'keydown',
    event => {

      const tagName =
        event.target?.tagName;


      if (
        [
          'INPUT',
          'TEXTAREA',
          'SELECT'
        ]
          .includes(tagName)
      ) {
        return;
      }


      if (
        event.key ===
          'ArrowLeft' &&
        currentStepId > 1
      ) {

        openStep(
          currentStepId - 1
        );

      }


      if (
        event.key ===
          'ArrowRight' &&
        currentStepId <
          steps.length
      ) {

        openStep(
          currentStepId + 1
        );

      }

    }
  );

}




/* =========================================================
   FINAL REVIEW PATCH — 13 SEP 2026 17:28
   Role order / Step 08 stock API remark / multi-role remarks
   ========================================================= */

/* STEP 07 — display order: 1 Nurse, 2 Patient, 3 Cashier */
ACTUAL_STEP_META[7].roles = ['nurse', 'patient', 'cashier'];
steps.find(step => step.id === 7).roles = ['nurse', 'patient', 'cashier'];

/* STEP 08 — display order: 1 Patient, 2 Pharmacist, 3 Cashier */
ACTUAL_STEP_META[8].roles = ['patient', 'pharmacist', 'cashier'];
steps.find(step => step.id === 8).roles = ['patient', 'pharmacist', 'cashier'];

/* STEP 08 — stock/API decision depends on the selected dispensing flow. */
steps.find(step => step.id === 8).th.integration = [
  'รอยืนยัน: API ตัด Stock ยาขึ้นอยู่กับ Flow การคีย์ยาที่เลือก'
];
steps.find(step => step.id === 8).en.integration = [
  'Pending confirmation: medication stock-deduction API depends on the selected dispensing flow'
];

steps.find(step => step.id === 8).th.notes = [
  'Default Address เป็นเพียงค่าเริ่มต้น ผู้ป่วยสามารถเลือกที่อยู่อื่นสำหรับ Order นั้นได้โดยไม่เปลี่ยน Default Address'
];
steps.find(step => step.id === 8).en.notes = [
  'Default Address is only the initial selection. The patient may choose another address for that order without changing the default address.'
];

/* =========================================================
   FINAL ROLE PATCH — 13 SEP 2026 17:54
   ========================================================= */

/* STEP 02 — Health Profile is patient-side only.
   Nurse screening belongs to the clinical screening step, not Step 02. */
ACTUAL_STEP_META[2].roles = ['patient'];
steps.find(step => step.id === 2).roles = ['patient'];
delete ROLE_INLINE_REMARKS[2];

/* Legacy source note: Step 10–12 role order before the final 11-step remap.
   Step 10: 1 Patient → 2 Pharmacist
   Step 11: 1 Pharmacist → 2 Patient
   Step 12: 1 Nurse → 2 Patient */
ROLE_ORDER_BADGES[10] = true;
ROLE_ORDER_BADGES[11] = true;
ROLE_ORDER_BADGES[12] = true;



/* =========================================================
   FINAL 11-STEP JOURNEY PATCH — 14 SEP 2026

   New journey order:
   01 Registration & Patient Profile
   02 Health Profile
   03 Appointment, Notification & Check-in
   04 No Check-in Patient Follow-up
   05 Nurse Screening + Visit History + Doctor + AI
   06 Billing & Payment
   07 Follow-up & Next Appointment
   08 Medication Delivery
   09 Accept & Verify Medicine
   10 Appointment with Pharmacist
   11 Medical Guidance with Pharmacist

   Patient Visit History remains a supporting function inside Step 05
   and is no longer counted as a separate journey step.
   ========================================================= */

(() => {

  /* -------------------------------------------------------
     1) REORDER / RENUMBER THE EXISTING STEP OBJECTS
     ------------------------------------------------------- */

  const originalById = new Map(
    steps.map(step => [step.id, step])
  );

  const newOrder = [
    1,  // Registration
    2,  // Health Profile
    3,  // Appointment / Check-in
    4,  // No Check-in Follow-up
    6,  // Clinical + AI (Visit History merged here)
    7,  // Billing & Payment
    12, // Follow-up & Next Appointment
    8,  // Delivery
    9,  // Medication Verify
    10, // Pharmacist Appointment
    11  // Pharmacist Counseling
  ];

  const iconByNewId = {
    1: '01-registration.png',
    2: '02-health-profile.png',
    3: '03-appointment-checkin.png',
    4: '04-nurse-followup.png',
    5: '05-clinical-ai.png',
    6: '06-Icon-Payment.png',
    7: '07-followup.png',
    8: '08-delivery.png',
    9: '09-medication-verify.png',
    10: '10-pharmacist-appointment.png',
    11: '11-pharmacist-counseling.png'
  };

  const reorderedSteps = newOrder
    .map((oldId, index) => {
      const step = originalById.get(oldId);
      if (!step) return null;

      const newId = index + 1;
      step.id = newId;
      step.icon = iconByNewId[newId];

      return step;
    })
    .filter(Boolean);

  steps.splice(0, steps.length, ...reorderedSteps);


  /* -------------------------------------------------------
     2) STEP 02 — PATIENT HEALTH PROFILE
     Patient enters Health Profile + Vital Signs.
     No BITHIS sync until nurse confirms in Step 05.
     ------------------------------------------------------- */

  const step02 = steps.find(step => step.id === 2);

  if (step02) {
    step02.role = 'patient';
    step02.roles = ['patient'];
    step02.hasBithisApi = false;

    step02.th.desc =
      'ผู้ป่วยกรอกและอัปเดตข้อมูลสุขภาพ รวมถึงสัญญาณชีพผ่าน LINE OA (Life App) โดยข้อมูลจะเก็บใน BIT Telemedicine ก่อน และยังไม่ส่งเข้า BITHIS จนกว่าพยาบาลจะตรวจสอบและยืนยันในขั้นตอนที่ 05';

    step02.en.desc =
      'Patients enter and update health information, including vital signs, through LINE OA (Life App). The data is stored in BIT Telemedicine first and is not sent to BITHIS until nurse review and confirmation in Step 05.';

    step02.th.features = [
      'บันทึกประวัติสุขภาพส่วนตัว ประวัติครอบครัว และประวัติการผ่าตัด',
      'บันทึกประวัติแพ้ยา ยาที่ใช้อยู่ และโรคประจำตัว',
      'บันทึกกรุ๊ปเลือด สถานะการสูบบุหรี่ การดื่มแอลกอฮอล์ และการตั้งครรภ์',
      'บันทึกส่วนสูง น้ำหนัก และคำนวณ BMI อัตโนมัติ',
      'ผู้ป่วยกรอกสัญญาณชีพได้เอง ได้แก่ อุณหภูมิ ความดันโลหิต ชีพจร อัตราการหายใจ น้ำตาลในเลือด และ SpO₂',
      'แสดงสถานะข้อมูลสุขภาพว่า ครบถ้วน หรือ ยังไม่ครบถ้วน',
      'ข้อมูล Health Profile และ Vital Signs ถูกบันทึกไว้ใน BIT Telemedicine เพื่อให้พยาบาลตรวจสอบในขั้นตอนที่ 05',
      'Vital Signs จะ Sync เข้า BITHIS หลังพยาบาลตรวจสอบและยืนยันแล้วเท่านั้น'
    ];

    step02.en.features = [
      'Personal, family and surgical history',
      'Drug allergy, current medication and chronic disease',
      'Blood type, smoking, alcohol and pregnancy status',
      'Height / Weight / automatic BMI',
      'Patient-entered vital signs: BT, BP, PR, RR, BS and SpO₂',
      'Profile Complete / Incomplete status',
      'Health Profile and Vital Signs are stored in BIT Telemedicine for nurse review in Step 05',
      'Vital Signs sync to BITHIS only after nurse review and confirmation'
    ];

    step02.th.flow = [
      'ผู้ป่วยกรอก Health Profile',
      'ผู้ป่วยกรอก Vital Signs',
      'บันทึกใน BIT Telemedicine',
      'พยาบาลตรวจสอบในขั้นตอนที่ 05',
      'ยืนยันแล้วจึง Sync BITHIS'
    ];

    step02.en.flow = [
      'Complete Health Profile',
      'Enter Vital Signs',
      'Store in BIT Telemedicine',
      'Nurse Review in Step 05',
      'Confirm → Sync BITHIS'
    ];

    step02.th.integration = [];
    step02.en.integration = [];

    step02.th.notes = [
      'ใช้ Health Profile เดิมของระบบและเพิ่มข้อมูลที่จำเป็น ไม่สร้างโปรไฟล์สุขภาพแยกใหม่',
      'ข้อมูลสัญญาณชีพที่ผู้ป่วยกรอกในขั้นตอนนี้ยังไม่ส่งเข้า BITHIS',
      'พยาบาลจะตรวจสอบและยืนยัน Vital Signs ในขั้นตอนที่ 05 ก่อน Sync เข้า BITHIS ผ่าน API'
    ];

    step02.en.notes = [
      'Extend the existing Health Profile; do not create a separate profile.',
      'Patient-entered vital signs are not sent to BITHIS at this step.',
      'The nurse reviews and confirms vital signs in Step 05 before API sync to BITHIS.'
    ];
  }


  /* -------------------------------------------------------
     3) STEP 04 — NO CHECK-IN FOLLOW-UP
     Rule locked: No Check-in = Not in Queue.
     Entire workflow stays inside BIT Telemedicine.
     ------------------------------------------------------- */

  const step04 = steps.find(step => step.id === 4);

  if (step04) {
    step04.role = 'nurse';
    step04.roles = ['nurse'];
    step04.hasBithisApi = false;

    step04.th.title = 'ติดตามผู้ป่วยที่ยังไม่เช็กอิน';
    step04.th.short = 'ติดตามผู้ป่วย';
    step04.th.desc =
      'ติดตามผู้ป่วยที่ถึงเวลานัดแล้วแต่ยังไม่ Check-in ซึ่งหมายถึงยังไม่เข้าสู่คิว พร้อมระบบแจ้งเตือน การติดตามโดยพยาบาล และการเก็บประวัติย้อนหลัง';

    step04.en.title = 'No Check-in Patient Follow-up';
    step04.en.short = 'No Check-in follow-up';
    step04.en.desc =
      'Follow patients who have reached their appointment time but have not checked in, meaning they have not entered the queue, with reminders, nurse follow-up and audit history.';

    step04.th.features = [
      'ระบบส่ง Reminder ผ่าน LINE OA ก่อนเวลานัดอัตโนมัติ เช่น 30, 15, 10, 5, 3 และ 1 นาที',
      'เมื่อถึงเวลานัดแล้วผู้ป่วยยังไม่ Check-in (= ยังไม่เข้าสู่คิว) ระบบเพิ่มผู้ป่วยเข้าสู่รายการ “ต้องโทรติดตามวันนี้” อัตโนมัติ',
      'แสดงชื่อผู้ป่วย HN แพทย์ เวลานัด จำนวนเวลาที่สาย เบอร์โทร จำนวนครั้งที่ติดตาม และเวลาติดตามล่าสุด',
      'พยาบาลโทรหาผู้ป่วยหรือส่งลิงก์ Check-in ซ้ำผ่าน LINE OA ได้',
      'พยาบาลสามารถตั้งเวลาติดตามซ้ำ เช่น 5 หรือ 10 นาที',
      'บันทึกผลการติดตาม เช่น ติดต่อได้และกำลังเข้าระบบ, ขอเลื่อนนัด, ยกเลิกนัด, ไม่รับสาย หรือเบอร์ไม่ถูกต้อง',
      'เก็บ Attempt No., เวลา, พยาบาลผู้ติดตาม, ผลการติดต่อ และหมายเหตุเป็น Audit Trail',
      'เมื่อผู้ป่วย Check-in สำเร็จ ระบบนำผู้ป่วยออกจากรายการติดตามและเข้าสู่ Waiting / Screening Queue อัตโนมัติ'
    ];

    step04.en.features = [
      'Automatic LINE OA reminders before the appointment, e.g. 30, 15, 10, 5, 3 and 1 minutes',
      'At appointment time, No Check-in (= not in queue) automatically adds the patient to Today’s Follow-up List',
      'Show patient name, HN, doctor, appointment time, minutes late, phone, attempt count and latest follow-up time',
      'Nurse can call the patient or resend the check-in link through LINE OA',
      'Nurse can schedule a retry, e.g. in 5 or 10 minutes',
      'Record outcomes: joining, reschedule, cancel, no answer or wrong number',
      'Keep attempt number, timestamp, nurse, result and note as an audit trail',
      'Successful check-in automatically removes the patient from follow-up and places them in the Waiting / Screening Queue'
    ];

    step04.th.flow = [
      'แจ้งเตือนก่อนเวลานัด',
      'ถึงเวลานัดแล้วยังไม่ Check-in',
      'เข้าสู่รายการติดตาม',
      'พยาบาลโทร / ส่งลิงก์ซ้ำ',
      'บันทึกผลการติดตาม',
      'ผู้ป่วย Check-in',
      'นำออกจากรายการติดตาม → เข้าคิว'
    ];

    step04.en.flow = [
      'Appointment Reminder',
      'No Check-in at Appointment Time',
      'Enter Follow-up List',
      'Call / Resend Link',
      'Record Outcome',
      'Patient Check-in',
      'Auto-remove → Enter Queue'
    ];

    step04.th.integration = [];
    step04.en.integration = [];

    step04.th.notes = [
      'ยังไม่ Check-in = ยังไม่เข้าสู่คิว',
      'ขั้นตอนนี้ดำเนินการภายใน BIT Telemedicine และไม่มี API เชื่อมไป BITHIS',
      'เมื่อผู้ป่วย Check-in และเข้าสู่ Waiting / Screening Queue แล้ว ต้อง Auto-remove จากรายการติดตาม',
      'ประวัติการติดตามต้องเก็บเป็น Audit Trail เพื่อดูย้อนหลังได้'
    ];

    step04.en.notes = [
      'No Check-in = the patient has not entered the queue.',
      'This workflow runs inside BIT Telemedicine and has no BITHIS API.',
      'After check-in and entry to the Waiting / Screening Queue, the patient must be auto-removed from follow-up.',
      'Follow-up activity must be retained as an audit trail.'
    ];
  }


  /* -------------------------------------------------------
     4) STEP 05 — MERGE VISIT HISTORY INTO CLINICAL WORKFLOW
     Nurse and Doctor can review prior Visit history during care.
     ------------------------------------------------------- */

  const step05 = steps.find(step => step.id === 5);

  if (step05) {
    step05.role = 'doctor';
    step05.roles = ['nurse', 'doctor'];
    step05.hasBithisApi = true;

    step05.th.title = 'คัดกรองและพบแพทย์';
    step05.th.short = 'คัดกรองและพบแพทย์';
    step05.th.desc =
      'พยาบาลคัดกรองและตรวจสอบข้อมูลผู้ป่วย รวมถึงประวัติ Visit เดิม ก่อนยืนยัน Vital Signs และ Sync เข้า BITHIS จากนั้นส่งต่อให้แพทย์ตรวจผ่าน Video Call โดยแพทย์สามารถดูประวัติการรักษาย้อนหลังและใช้ AI ช่วยจัดทำเอกสารทางคลินิก';

    step05.en.title = 'Nurse Screening → Doctor → AI';
    step05.en.short = 'Screening, history & consultation';
    step05.en.desc =
      'The nurse screens the patient and reviews prior Visit history, confirms vital signs and syncs them to BITHIS, then hands off to the doctor for video consultation. The doctor can review clinical history and use AI-assisted documentation.';

    step05.th.features = [
      'พยาบาลและแพทย์สามารถค้นหาและเปิดดูประวัติ Visit เดิมตามสิทธิ์ โดยค้นหาจากชื่อผู้ป่วย HN เลขที่นัดหมาย วันที่ แพทย์ หรือสถานะ Visit',
      'ข้อมูลทางคลินิกต้องผูกกับ Visit หรือ Appointment ID เพื่อไม่ให้ข้อมูลจากคนละ Visit ปะปนกัน',
      'พยาบาลตรวจสอบข้อมูลคัดกรองและ Vital Signs ที่ผู้ป่วยกรอกในขั้นตอนที่ 02 และสามารถแก้ไขหรือเพิ่มข้อมูลได้',
      'ความดันโลหิตเป็นข้อมูลบังคับก่อนยืนยันการคัดกรอง',
      'เมื่อพยาบาลยืนยัน Vital Signs ระบบ Sync ข้อมูลเข้า BITHIS ผ่าน API ก่อนส่งต่อแพทย์',
      'หาก Sync ไม่สำเร็จ ต้องแสดง Error และ Retry โดยยังไม่ส่งต่อแพทย์',
      'แพทย์เปิดดู Visit History และข้อมูลคัดกรองก่อนหรือระหว่าง Video Consultation ได้',
      'แสดง AI Subtitle / Transcript แบบเรียลไทม์ใต้หน้าวิดีโอ และแยกจาก Chat ที่อยู่ด้านขวา',
      'หลังการตรวจ AI ช่วยสร้าง Transcript → SOAP Summary → ICD-10 Recommendation → OPD Draft',
      'AI เป็นผู้ช่วยเสนอและสร้างร่างเท่านั้น แพทย์เป็นผู้ตรวจสอบ แก้ไข และยืนยันข้อมูลสุดท้าย',
      'รองรับ Save Draft และ Save Final และจัดเก็บเอกสารทางคลินิกตาม Workflow ของโรงพยาบาล'
    ];

    step05.en.features = [
      'Nurse and doctor can search and review prior Visits by permission using patient name, HN, appointment number, date, doctor or Visit status',
      'Clinical data is linked to Visit / Appointment ID so records from different Visits do not mix',
      'Nurse reviews patient-entered screening data and vital signs from Step 02 and can correct or add information',
      'Blood pressure is required before screening confirmation',
      'After nurse confirmation, vital signs sync to BITHIS via API before handoff to the doctor',
      'Failed sync shows an error and retry; the case is not sent to the doctor yet',
      'Doctor can review Visit History and screening information before or during the video consultation',
      'Real-time AI subtitle / transcript appears below the video and remains separate from Chat on the right',
      'After consultation: AI Transcript → SOAP Summary → ICD-10 Recommendation → OPD Draft',
      'AI assists and drafts only; the doctor reviews, edits and confirms the final content',
      'Support Save Draft and Save Final according to the hospital clinical-document workflow'
    ];

    step05.th.benefits = [
      'ทีมรักษาเห็นทั้งข้อมูลปัจจุบันและประวัติ Visit เดิมในจุดเดียว',
      'ลดความเสี่ยงข้อมูลจากคนละ Visit ปะปนกัน',
      'ลดการบันทึกข้อมูลซ้ำและเชื่อม Vital Signs เข้าสู่ BITHIS อย่างเป็นระบบ',
      'AI ช่วยลดภาระการจัดทำเอกสาร โดยแพทย์ยังคงเป็นผู้ตัดสินใจและยืนยันข้อมูลสุดท้าย'
    ];

    step05.en.benefits = [
      'Shows current data and prior Visit history in one clinical workflow',
      'Reduces the risk of mixing records from different Visits',
      'Reduces duplicate documentation and provides structured Vital Signs sync to BITHIS',
      'AI reduces documentation workload while the doctor retains final clinical control'
    ];

    step05.th.flow = [
      'พยาบาลเปิดดู Visit History',
      'ตรวจสอบข้อมูลคัดกรองและ Vital Signs',
      'ยืนยัน → Sync BITHIS',
      'ส่งต่อแพทย์',
      'แพทย์เปิดดูประวัติและ Video Call',
      'AI ถอดเสียงการสนทนา',
      'AI สรุป SOAP',
      'AI แนะนำ ICD-10',
      'AI สร้าง OPD Draft',
      'แพทย์ตรวจสอบและยืนยัน'
    ];

    step05.en.flow = [
      'Nurse Reviews Visit History',
      'Review Screening & Vital Signs',
      'Confirm → Sync BITHIS',
      'Send to Doctor',
      'Doctor Reviews History + Video Call',
      'AI Transcript',
      'SOAP Summary',
      'ICD-10 Recommendation',
      'OPD Draft',
      'Doctor Review & Final'
    ];

    step05.th.integration = [
      'Vital Signs หลังพยาบาลยืนยัน',
      'ข้อมูลทางคลินิก / OPD ตาม Workflow ที่ยืนยัน'
    ];

    step05.en.integration = [
      'Vital Signs after nurse confirmation',
      'Clinical / OPD data under the confirmed workflow'
    ];

    step05.th.notes = [
      'Patient Visit History ไม่ได้นับเป็น Step แยก แต่เป็นฟังก์ชันที่พยาบาลและแพทย์เปิดดูได้ระหว่างการคัดกรองและการตรวจ',
      'ข้อมูลประวัติการรักษาต้องผูกกับ Visit หรือ Appointment ID',
      'AI Subtitle ต้องอยู่ใต้ Video และ Chat ต้องอยู่ด้านขวาอย่างชัดเจน',
      'AI มีหน้าที่ช่วยสรุป แนะนำ และสร้างร่างเท่านั้น แพทย์เป็นผู้ยืนยันข้อมูลสุดท้าย',
      'การคีย์รายการยาผ่าน BIT Telemedicine และการใช้ Medication Master จาก BITHIS ยังรอยืนยัน API / Interface'
    ];

    step05.en.notes = [
      'Patient Visit History is not a separate journey step; it is a function available to nurses and doctors during screening and consultation.',
      'Clinical history must be linked to Visit / Appointment ID.',
      'AI Subtitle stays below the video and Chat stays on the right.',
      'AI assists, recommends and drafts; the doctor confirms the final clinical content.',
      'Medication entry in BIT Telemedicine and use of the BITHIS Medication Master remain pending API / interface confirmation.'
    ];
  }


  /* -------------------------------------------------------
     5) STEP 06 — BILLING & PAYMENT
     ------------------------------------------------------- */

  const step06 = steps.find(step => step.id === 6);

  if (step06) {
    step06.role = 'nurse';
    step06.roles = ['nurse', 'patient', 'cashier'];
    step06.hasBithisApi = true;
  }


  /* -------------------------------------------------------
     6) STEP 07 — FOLLOW-UP IMMEDIATELY AFTER PAYMENT
     ------------------------------------------------------- */

  const step07 = steps.find(step => step.id === 7);

  if (step07) {
    step07.role = 'nurse';
    step07.roles = ['nurse', 'patient'];
    step07.hasBithisApi = true;

    step07.th.title = 'ติดตามอาการและนัดหมายครั้งถัดไป';
    step07.th.short = 'ติดตามและนัดครั้งถัดไป';
    step07.th.desc =
      'หลังผู้ป่วยชำระเงินเรียบร้อยแล้ว พยาบาลสามารถติดตามอาการและจัดทำนัด Follow-up ครั้งถัดไปได้ทันที เพื่อให้การดูแลต่อเนื่องก่อนเข้าสู่ขั้นตอนจัดส่งยาและการดูแลด้านยา';

    step07.en.title = 'Follow-up & Next Appointment';
    step07.en.short = 'Follow-up & next visit';
    step07.en.desc =
      'After successful payment, the nurse can follow up with the patient and create the next follow-up appointment immediately, supporting continuous care before medication delivery and pharmacist care.';

    step07.th.features = [
      'แพทย์สามารถระบุแผนหรือช่วงเวลาที่ต้อง Follow-up ไว้จากขั้นตอนการตรวจ',
      'หลังชำระเงินสำเร็จ พยาบาลสามารถติดตามอาการและสร้างนัดหมายครั้งถัดไปได้',
      'พยาบาลสามารถอัปเดตรายละเอียดนัด Follow-up ตามแผนการรักษา',
      'ส่งการยืนยันนัด Reminder และ Notification ผ่าน LINE OA',
      'ผู้ป่วยดูรายละเอียดนัดหมายครั้งถัดไปได้ผ่าน Life App',
      'เมื่อถึงรอบนัดใหม่ ผู้ป่วยกลับเข้าสู่ขั้นตอนนัดหมายและ Check-in ตาม Journey เดิม'
    ];

    step07.en.features = [
      'Doctor can define the follow-up plan or interval during consultation',
      'After successful payment, the nurse can follow up and create the next appointment',
      'Nurse can update follow-up appointment details according to the care plan',
      'Send appointment confirmation, reminders and notifications through LINE OA',
      'Patient can view the next appointment through the Life App',
      'At the next visit, the patient returns to the appointment and check-in journey'
    ];

    step07.th.benefits = [
      'นัด Follow-up ได้ต่อเนื่องทันทีหลังชำระเงิน',
      'ลดโอกาสผู้ป่วยหลุดจากการติดตามรักษา',
      'เชื่อม Visit ปัจจุบันกับ Visit ครั้งถัดไปได้ชัดเจน'
    ];

    step07.en.benefits = [
      'Allows continuous follow-up scheduling immediately after payment',
      'Reduces loss to follow-up',
      'Clearly connects the current Visit with the next Visit'
    ];

    step07.th.flow = [
      'ชำระเงินสำเร็จ',
      'พยาบาลติดตามอาการ',
      'ตรวจสอบแผน Follow-up',
      'สร้างนัดครั้งถัดไป',
      'แจ้งเตือนผ่าน LINE OA',
      'ผู้ป่วยดูนัดครั้งถัดไป',
      'กลับเข้าสู่ Appointment Journey เมื่อถึงรอบนัด'
    ];

    step07.en.flow = [
      'Payment Completed',
      'Nurse Follow-up',
      'Review Follow-up Plan',
      'Create Next Appointment',
      'LINE OA Notification',
      'Patient Views Next Appointment',
      'Return to Appointment Journey at Next Visit'
    ];

    step07.th.integration = [
      'ข้อมูลนัดหมายครั้งถัดไป',
      'ข้อมูลแพทย์ / ตารางนัด'
    ];

    step07.en.integration = [
      'Next Appointment Data',
      'Doctor / Schedule Data'
    ];

    step07.th.notes = [
      'ตำแหน่งของขั้นตอนนี้ล็อกไว้หลัง Step 06 ค่าใช้จ่ายและชำระเงิน',
      'พยาบาลเป็นผู้ดำเนินการสร้างนัด Follow-up ในขั้นตอนนี้',
      'เมื่อถึงรอบนัดใหม่ ผู้ป่วยใช้กติกาการแจ้งเตือนและ Check-in ตามขั้นตอนที่ 03'
    ];

    step07.en.notes = [
      'This step is positioned immediately after Step 06 Billing & Payment.',
      'The nurse creates the follow-up appointment in this step.',
      'At the next appointment, notification and check-in rules follow Step 03.'
    ];
  }


  /* -------------------------------------------------------
     7) ROLE / PLATFORM / API META FOR THE NEW 11-STEP ORDER
     ------------------------------------------------------- */

  const finalMeta = {
    1: { roles: ['patient', 'nurse'], hasBithisApi: true },
    2: { roles: ['patient'], hasBithisApi: false },
    3: { roles: ['patient', 'nurse'], hasBithisApi: true },
    4: { roles: ['nurse'], hasBithisApi: false },
    5: { roles: ['nurse', 'doctor'], hasBithisApi: true },
    6: { roles: ['nurse', 'patient', 'cashier'], hasBithisApi: true },
    7: { roles: ['nurse', 'patient'], hasBithisApi: true },
    8: { roles: ['patient', 'pharmacist', 'cashier'], hasBithisApi: true },
    9: { roles: ['patient'], hasBithisApi: false },
    10: { roles: ['patient', 'pharmacist'], hasBithisApi: false },
    11: { roles: ['pharmacist', 'patient'], hasBithisApi: false }
  };

  steps.forEach(step => {
    const meta = finalMeta[step.id];
    if (!meta) return;
    step.roles = [...meta.roles];
    step.hasBithisApi = meta.hasBithisApi;
  });


  /* -------------------------------------------------------
     8) ROLE ACTIONS FOR THE NEW NUMBERING
     ------------------------------------------------------- */

  ROLE_ACTIONS[5] = {
    nurse: {
      th: 'ดูประวัติ Visit คัดกรอง ตรวจสอบ Vital Signs และส่งต่อแพทย์',
      en: 'Review Visit history, screen, confirm vital signs and hand off to doctor'
    },
    doctor: {
      th: 'ดูประวัติการรักษา ตรวจผ่าน Video Call และยืนยันเอกสารทางคลินิก',
      en: 'Review clinical history, consult by video and confirm clinical documentation'
    }
  };

  ROLE_ACTIONS[6] = {
    nurse: {
      th: 'ตรวจสอบและยืนยันรายการค่าใช้จ่ายก่อนส่งให้ผู้ป่วย',
      en: 'Review and confirm charges before sending the bill'
    },
    patient: {
      th: 'รับ Bill และชำระเงินผ่าน LINE OA / Life App',
      en: 'Receive the bill and pay through LINE OA / Life App'
    },
    cashier: {
      th: 'จัดการรายการค่าใช้จ่ายและปิดบิลใน BITHIS ตาม Workflow ที่ยืนยัน',
      en: 'Manage charges and bill closing in BITHIS under the confirmed workflow'
    }
  };

  ROLE_ACTIONS[7] = {
    nurse: {
      th: 'ติดตามอาการและสร้างนัด Follow-up ครั้งถัดไปหลังชำระเงิน',
      en: 'Follow up and create the next appointment after payment'
    },
    patient: {
      th: 'รับการติดตามและดูรายละเอียดนัดครั้งถัดไป',
      en: 'Receive follow-up and view the next appointment'
    }
  };

  ROLE_ACTIONS[8] = {
    patient: {
      th: 'เลือกที่อยู่ วิธีส่ง และติดตามสถานะการจัดส่งยา',
      en: 'Choose address, delivery method and track delivery'
    },
    pharmacist: {
      th: 'จัดเตรียมยาเพื่อส่งมอบ',
      en: 'Prepare medication for delivery'
    },
    cashier: {
      th: 'รับค่าจัดส่งเป็นรายการ Charge ใน BITHIS ตาม Final Flow',
      en: 'Receive the delivery fee as a BITHIS charge under the final flow'
    }
  };

  ROLE_ACTIONS[9] = {
    patient: {
      th: 'ยืนยันรับยา ตรวจสอบยา และส่งรูปหรือวิดีโอ',
      en: 'Confirm receipt, verify medication and upload photo/video'
    }
  };

  ROLE_ACTIONS[10] = {
    patient: {
      th: 'เลือกนัด เช็กอิน และรอเภสัชกร',
      en: 'Book, check in and wait for the pharmacist'
    },
    pharmacist: {
      th: 'เปิดตารางนัดและบริหารคิว',
      en: 'Open schedule and manage the queue'
    }
  };

  ROLE_ACTIONS[11] = {
    pharmacist: {
      th: 'ให้คำแนะนำและบันทึก Counseling Note',
      en: 'Counsel the patient and record a counseling note'
    },
    patient: {
      th: 'เข้าร่วม Video Call และรับคำแนะนำการใช้ยา',
      en: 'Join the video call and receive medication guidance'
    }
  };


  /* -------------------------------------------------------
     9) ROLE ORDER BADGES
     ------------------------------------------------------- */

  Object.keys(ROLE_ORDER_BADGES).forEach(key => {
    delete ROLE_ORDER_BADGES[key];
  });

  [5, 6, 7, 8, 10, 11].forEach(stepId => {
    ROLE_ORDER_BADGES[stepId] = true;
  });

  /* Step 01 and 03 keep the original remark because card position
     is not intended to define the workflow order. */
  delete ROLE_INLINE_REMARKS[5];
  delete ROLE_INLINE_REMARKS[6];
  delete ROLE_INLINE_REMARKS[7];
  delete ROLE_INLINE_REMARKS[8];
  delete ROLE_INLINE_REMARKS[9];
  delete ROLE_INLINE_REMARKS[10];
  delete ROLE_INLINE_REMARKS[11];


  /* -------------------------------------------------------
     10) UI LABELS
     ------------------------------------------------------- */

  UI_TEXT.th.journeyTitle = 'เส้นทางการดูแลผู้ป่วย 11 ขั้นตอน';
  UI_TEXT.en.journeyTitle = '11-Step Patient Journey';

})();


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    document.documentElement.lang =
      currentLang;


    bindLanguageButtons();

    bindKeyboardNavigation();


    updateLanguageButtons();

    updateStaticText();

    updateOverviewLanguage();

    updateApiMapLanguage();

    updateLineSupportShowcase();


    renderStepNavigation();

    renderCurrentStep();

    renderRemarks();

  }
);