// iPadOS may request the desktop version of a site and report a fine pointer.
// Mark iPad explicitly so its Step Path layout does not depend on pointer mode.
if (/iPad/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
  document.documentElement.classList.add('bit-ipad');
}

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
    },
    latestStatus: {
      th: ['ผู้ป่วยเก่าใน BITHIS ใช้ HN เดิมและไม่ต้องยืนยันตัวตนซ้ำ', 'ผู้ป่วยใหม่ต้องยืนยันตัวตนก่อน และเจ้าหน้าที่โรงพยาบาลสร้าง HN ใหม่ใน BITHIS', 'เลข ID ทั้งฝั่งผู้ป่วยและโรงพยาบาลต้องแสดงแบบปกปิดข้อมูล (*** )', 'กรณี Reject การยืนยันตัวตน: ต้องมีเหตุผลแบบ Drop-down, Note และลิงก์กลับหน้าที่ต้องแก้ไขโดยตรง', 'Consent Redirect และการย้าย Pop-up มาแสดงกลางหน้าจออยู่ระหว่างพัฒนา'],
      en: ['Existing BITHIS patients use their existing HN and do not require repeat identity verification.', 'New patients require identity verification; hospital staff creates the new HN in BITHIS.', 'Patient and hospital ID numbers should be masked (***).', 'Rejected verification should provide a drop-down reason, note, and direct link back to the page requiring correction.', 'Consent redirect and centered pop-up improvements are under development.']
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
    },
    latestStatus: {
      th: ['สถานะปัจจุบัน: สัญญาณชีพกรอกได้จากฝั่งโรงพยาบาล/พยาบาล', 'การให้ผู้ป่วยกรอก V/S ผ่าน Life App ยังอยู่ระหว่างพัฒนา', 'ต้องรองรับการบันทึก V/S หลายครั้งและ Plot Graph เพื่อดูแนวโน้ม'],
      en: ['Current status: vital signs can be entered by hospital staff/nurses.', 'Patient-entered vital signs through the Life App are still under development.', 'Planned enhancement: multiple vital-sign records and trend graphs.']
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
    },
    latestStatus: {
      th: ['สถานะปัจจุบัน: พยาบาลเป็นผู้บันทึก V/S ระหว่างการคัดกรอง', 'พยาบาลจัดกลุ่ม/คัดกรองและส่งต่อผู้ป่วยให้แพทย์', 'หลัง Screening ผู้ป่วยรอแพทย์ต่อในห้องวิดีโอเดิมได้ โดยไม่ต้องวางสายหรือ Check-in ซ้ำ', 'Chat ระหว่าง Video Call ใช้งานได้แล้ว'],
      en: ['Current status: the nurse records vital signs during screening.', 'The nurse groups/triages the patient and forwards the patient to the doctor.', 'After screening, the patient can remain in the same video room to wait for the doctor without checking in again.', 'Chat during the video call is available.']
    }
    ,
    latestStatus: {
      th: ['Current AI flow: AI Transcription → AI Summary → SOAP → ICD-10 (Primary + Secondary)', 'AI Draft OPD ยังอยู่ระหว่างพัฒนา และมี Requirement ให้แสดงเป็น %', 'เอกสารสามารถ Export PDF → Print ให้แพทย์เซ็น → Scan เข้า EMR ใน BITHIS', 'รองรับโหมดแบ่งหน้าจอระหว่าง Video Call'],
      en: ['Current AI flow: AI Transcription → AI Summary → SOAP → ICD-10 (Primary + Secondary).', 'AI Draft OPD is still under development, with a requirement to display a percentage.', 'Document flow: Export PDF → doctor signs printed document → scan into the EMR in BITHIS.', 'Split-view mode is supported during the video call.']
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
    },
    latestStatus: {
      th: ['Current Flow ยังไม่สามารถ Key รายการยาได้ เนื่องจาก Medication Flow ยังไม่ Confirm', 'Flow ปัจจุบัน: ไม่ใส่รายการยา → ส่งค่าใช้จ่าย → ผู้ป่วยตรวจสอบค่าใช้จ่าย', 'Current Flow จบที่ Patient View Charges', 'Payment / Medication / Integration หลังจากจุดนี้ต้องรอ Final Workflow'],
      en: ['The current flow cannot yet enter medication items because the Medication Flow is not confirmed.', 'Current flow: no medication item entry → send charges → patient views charges.', 'The current implemented flow ends at Patient View Charges.', 'Payment, medication, and downstream integration require the final workflow to be confirmed.']
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
    ,
    workflowStatus: {
      th: "แผนการทำงานที่เสนอ / รอยืนยันขั้นตอนการทำงานฉบับสุดท้าย",
      en: "Proposed workflow / Pending final workflow confirmation"
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
    ,
    workflowStatus: {
      th: "แผนการทำงานที่เสนอ / รอยืนยันขั้นตอนการทำงานฉบับสุดท้าย",
      en: "Proposed workflow / Pending final workflow confirmation"
    },
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
    ,
    workflowStatus: {
      th: "แผนการทำงานที่เสนอ / รอยืนยันขั้นตอนการทำงานฉบับสุดท้าย",
      en: "Proposed workflow / Pending final workflow confirmation"
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
    ,
    workflowStatus: {
      th: "แผนการทำงานที่เสนอ / รอยืนยันขั้นตอนการทำงานฉบับสุดท้าย",
      en: "Proposed workflow / Pending final workflow confirmation"
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
    ,
    workflowStatus: {
      th: "แผนการทำงานที่เสนอ / รอยืนยันขั้นตอนการทำงานฉบับสุดท้าย",
      en: "Proposed workflow / Pending final workflow confirmation"
    },
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
      'เส้นทางการดูแลผู้ป่วย 12 ขั้นตอน',

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
      '12-Step Patient Journey',

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
  if (step.id !== 9) return '';

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
    <div class="step-role-row role-count-${Math.min(roles.length, 3)}" data-step="${step.id}" data-role-count="${roles.length}" aria-label="${currentLang === 'th' ? 'ผู้เกี่ยวข้องในขั้นตอนนี้' : 'Roles in this step'}">
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
   STEP PRESENTATION MEDIA
   Thai / English infographic + narration
   ========================================================= */

function getStepPresentationImagePath(stepId = currentStepId, lang = currentLang) {

  const languageFolder =
    lang === 'th'
      ? 'PIC-TH'
      : 'PIC-EN';

  const filePrefix =
    lang === 'th'
      ? 'PIC-TH'
      : 'PIC-EN';

  return (
    `image/PIC-BIT/${languageFolder}/${filePrefix}${stepId}.png`
  );

}


function renderStepPresentationMedia(step) {

  const imagePath =
    getStepPresentationImagePath(
      step.id,
      currentLang
    );

  const altText =
    currentLang === 'th'
      ? `อินโฟกราฟิกขั้นตอนที่ ${String(step.id).padStart(2, '0')} ${step.th.title}`
      : `Step ${String(step.id).padStart(2, '0')} infographic: ${step.en.title}`;

  return `
    <section
      class="step-presentation-media"
      aria-label="${altText}"
    >
      <div class="step-presentation-image-wrap">
        <img
          src="${imagePath}"
          class="step-presentation-image"
          alt="${altText}"
          loading="eager"
        >
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

          <button
            class="action-btn presentation-btn"
            type="button"
            id="presentation-btn"
          >
            <span class="action-icon">🖼️</span>
            <span>${currentLang === 'th' ? 'นำเสนอ' : 'Present'}</span>
          </button>

          <div class="audio-timeline compact-audio-timeline" id="audio-timeline">
            <span class="audio-time" id="audio-current-time">0:00</span>
            <input
              class="audio-progress"
              id="audio-progress"
              type="range"
              min="0"
              max="100"
              step="0.1"
              value="0"
              aria-label="${currentLang === 'th' ? 'ตำแหน่งเสียง' : 'Audio position'}"
            >
            <span class="audio-time" id="audio-duration">--:--</span>
          </div>

        </div>

      </header>

      ${renderStepPresentationMedia(step)}


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

  document
    .getElementById('audio-progress')
    ?.addEventListener('input', event => seekStepAudio(event.target.value));

  document
    .getElementById('presentation-btn')
    ?.addEventListener('click', openStepPresentation);

  document
    .querySelector('.step-presentation-image-wrap')
    ?.addEventListener('click', openStepPresentation);

}


/* =========================================================
   FULLSCREEN STEP PRESENTATION
   Infographic + narration + seekable timeline
   ========================================================= */

function closeStepPresentation() {
  const overlay = document.getElementById('step-presentation-overlay');
  if (!overlay) return;

  stopAudio();
  overlay.remove();
  document.body.classList.remove('presentation-open');

  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

function openStepPresentation() {
  stopAudio();

  const step = steps.find(item => item.id === currentStepId);
  if (!step) return;

  document.getElementById('step-presentation-overlay')?.remove();

  const imagePath = getStepPresentationImagePath(step.id, currentLang);
  const altText = currentLang === 'th'
    ? `อินโฟกราฟิกขั้นตอนที่ ${String(step.id).padStart(2, '0')} ${step.th.title}`
    : `Step ${String(step.id).padStart(2, '0')} infographic: ${step.en.title}`;

  const overlay = document.createElement('div');
  overlay.id = 'step-presentation-overlay';
  overlay.className = 'presentation-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="presentation-toolbar">
      <button type="button" class="presentation-control" id="presentation-audio-btn">
        <span id="presentation-audio-icon">⏸</span>
        <span id="presentation-audio-text">${currentLang === 'th' ? 'พักเสียง' : 'Pause'}</span>
      </button>
      <button type="button" class="presentation-control" id="presentation-close-btn">
        ✕ ${currentLang === 'th' ? 'ปิด' : 'Close'}
      </button>
    </div>

    <img src="${imagePath}" class="presentation-overlay-image" alt="${altText}">

    <div class="presentation-audio-dock">
      <span class="audio-time" id="presentation-current-time">0:00</span>
      <input
        class="audio-progress presentation-progress"
        id="presentation-audio-progress"
        type="range"
        min="0"
        max="100"
        step="0.1"
        value="0"
        aria-label="${currentLang === 'th' ? 'ตำแหน่งเสียงนำเสนอ' : 'Presentation audio position'}"
      >
      <span class="audio-time" id="presentation-duration">--:--</span>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('presentation-open');

  overlay.querySelector('#presentation-close-btn')
    ?.addEventListener('click', closeStepPresentation);

  overlay.querySelector('#presentation-audio-btn')
    ?.addEventListener('click', toggleStepAudio);

  overlay.querySelector('#presentation-audio-progress')
    ?.addEventListener('input', event => seekStepAudio(event.target.value));

  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeStepPresentation();
  });

  if (overlay.requestFullscreen) {
    overlay.requestFullscreen().catch(() => {});
  }

  playStepAudio();
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

  currentStepId = stepId;

  renderStepNavigation();
  renderCurrentStep();

  /*
    Phone / iPad:
    The header and Step Path are both sticky. Their real rendered heights can
    change after the Step Path is rebuilt and after images/fonts settle.
    Recalculate the offset more than once so the Step title always finishes
    below the sticky navigation instead of being covered by it.
  */
  const scrollSelectedStepIntoView = (behavior = 'auto') => {

    const target =
      document.querySelector('#step-content .step-card') ||
      document.getElementById('step-content') ||
      document.getElementById('presentation');

    if (!target) {
      return;
    }

    const header =
      document.querySelector('.site-header');

    const headerHeight =
      header
        ? Math.ceil(header.getBoundingClientRect().height)
        : 72;

    const isHorizontalStickyStepPath =
      window.matchMedia('(max-width: 900px)').matches ||
      document.documentElement.classList.contains('bit-ipad');

    const stickyStepPath =
      isHorizontalStickyStepPath
        ? document.querySelector('.step-sidebar')
        : null;

    const stepPathHeight =
      stickyStepPath &&
      window.getComputedStyle(stickyStepPath).position === 'sticky'
        ? Math.ceil(stickyStepPath.getBoundingClientRect().height)
        : 0;

    const safeGap = 18;

    const targetTop =
      target.getBoundingClientRect().top +
      window.pageYOffset;

    window.scrollTo({
      top: Math.max(
        0,
        targetTop - headerHeight - stepPathHeight - safeGap
      ),
      behavior
    });
  };

  requestAnimationFrame(() => {
    scrollSelectedStepIntoView('smooth');

    // Re-check after layout settles (especially Safari/iPhone/iPad).
    window.setTimeout(
      () => scrollSelectedStepIntoView('auto'),
      180
    );

    window.setTimeout(
      () => scrollSelectedStepIntoView('auto'),
      420
    );
  });
}

/* =========================================================
   AUDIO
   Shared player for Listen + Present + seekable timeline
   ========================================================= */

function getAudioPath() {
  const stepNumber = String(currentStepId).padStart(2, '0');
  const languageFolder = currentLang === 'th' ? 'Sound-TH' : 'Sound-EN';
  const languageSuffix = currentLang === 'th' ? 'TH' : 'EN';

  return `image/Sound-BIT/${languageFolder}/${stepNumber}-${languageSuffix}.wav`;
}

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '--:--';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function updateAudioUI() {
  const audio = activeAudio;
  const duration = audio && Number.isFinite(audio.duration) ? audio.duration : 0;
  const current = audio && Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
  const percent = duration > 0 ? (current / duration) * 100 : 0;
  const isPlaying = Boolean(audio && !audio.paused && !audio.ended);

  const mainProgress = document.getElementById('audio-progress');
  const mainCurrent = document.getElementById('audio-current-time');
  const mainDuration = document.getElementById('audio-duration');
  const mainText = document.getElementById('audio-btn-text');

  if (mainProgress) mainProgress.value = String(percent);
  if (mainCurrent) mainCurrent.textContent = formatAudioTime(current);
  if (mainDuration) mainDuration.textContent = duration > 0 ? formatAudioTime(duration) : '--:--';
  if (mainText) mainText.textContent = isPlaying ? UI_TEXT[currentLang].stop : UI_TEXT[currentLang].listen;

  const presentProgress = document.getElementById('presentation-audio-progress');
  const presentCurrent = document.getElementById('presentation-current-time');
  const presentDuration = document.getElementById('presentation-duration');
  const presentText = document.getElementById('presentation-audio-text');
  const presentIcon = document.getElementById('presentation-audio-icon');

  if (presentProgress) presentProgress.value = String(percent);
  if (presentCurrent) presentCurrent.textContent = formatAudioTime(current);
  if (presentDuration) presentDuration.textContent = duration > 0 ? formatAudioTime(duration) : '--:--';
  if (presentText) presentText.textContent = isPlaying
    ? (currentLang === 'th' ? 'พักเสียง' : 'Pause')
    : (currentLang === 'th' ? 'เล่นเสียง' : 'Play');
  if (presentIcon) presentIcon.textContent = isPlaying ? '⏸' : '▶';
}

function attachAudioEvents(audio) {
  ['loadedmetadata', 'durationchange', 'timeupdate', 'play', 'pause', 'seeking', 'seeked']
    .forEach(eventName => audio.addEventListener(eventName, updateAudioUI));

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    updateAudioUI();
  });

  audio.addEventListener('error', () => {
    if (activeAudio === audio) activeAudio = null;
    updateAudioUI();
    showToast(UI_TEXT[currentLang].audioMissing);
  });
}

function ensureStepAudio() {
  const expectedPath = getAudioPath();

  if (activeAudio && activeAudio.dataset?.sourcePath === expectedPath) {
    return activeAudio;
  }

  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }

  const audio = new Audio(expectedPath);
  audio.preload = 'metadata';
  audio.dataset.sourcePath = expectedPath;
  activeAudio = audio;
  attachAudioEvents(audio);
  updateAudioUI();
  return audio;
}

function playStepAudio() {
  const audio = ensureStepAudio();

  audio.play()
    .then(updateAudioUI)
    .catch(() => {
      if (activeAudio === audio) activeAudio = null;
      updateAudioUI();
      showToast(UI_TEXT[currentLang].audioMissing);
    });
}

function toggleStepAudio() {
  const audio = ensureStepAudio();

  if (!audio.paused && !audio.ended) {
    audio.pause();
    updateAudioUI();
    return;
  }

  if (audio.ended) audio.currentTime = 0;
  playStepAudio();
}

function seekStepAudio(percentValue) {
  const audio = ensureStepAudio();
  const percent = Math.min(100, Math.max(0, Number(percentValue) || 0));

  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    return;
  }

  audio.currentTime = (percent / 100) * audio.duration;
  updateAudioUI();
}

function stopAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }

  updateAudioUI();
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

  updateDevelopmentViewerLanguage();

  renderStepNavigation();

  renderCurrentStep();

  renderRemarks();

  updateHeroLanguage();

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

  const demoLabel =
    section.querySelector('.line-support-demo-label');

  if (demoLabel) {
    demoLabel.textContent =
      currentLang === 'th'
        ? 'ดูตัวอย่าง LINE OA Support'
        : 'View LINE OA Support Demo';
  }

  updateLineSupportVideoLanguage();

}



/* =========================================================
   LINE OA SUPPORT VIDEO
   - TH: image/Line-QA/Line-OA-TH/Line-OA-TH.mov
   - EN: image/Line-QA/Line-OA-EN/Line-OA-EN.mov
   - Video is the master for Play/Pause + Timeline
   ========================================================= */

const LINE_SUPPORT_VIDEO = {
  th: 'image/Line-QA/Line-OA-TH/Line-OA-TH.mov',
  en: 'image/Line-QA/Line-OA-EN/Line-OA-EN.mov'
};

function formatLineSupportVideoTime(seconds) {
  const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  const min = Math.floor(safe / 60);
  const sec = Math.floor(safe % 60);
  return `${min}:${String(sec).padStart(2, '0')}`;
}

function updateLineSupportVideoLanguage() {
  const modal = document.getElementById('lineSupportVideoModal');
  const video = document.getElementById('lineSupportVideo');
  const title = document.getElementById('lineSupportVideoTitle');
  const close = document.getElementById('lineSupportVideoClose');
  const seek = document.getElementById('lineSupportVideoSeek');

  if (title) {
    title.textContent =
      currentLang === 'th'
        ? 'ตัวอย่าง LINE OA Support'
        : 'LINE OA Support Demo';
  }

  if (close) {
    close.setAttribute(
      'aria-label',
      currentLang === 'th' ? 'ปิด' : 'Close'
    );
  }

  if (seek) {
    seek.setAttribute(
      'aria-label',
      currentLang === 'th' ? 'ตำแหน่งวิดีโอ' : 'Video position'
    );
  }

  if (!video) return;

  const desired = LINE_SUPPORT_VIDEO[currentLang === 'en' ? 'en' : 'th'];
  const existing = video.getAttribute('src') || '';

  if (existing !== desired) {
    const wasOpen = modal?.classList.contains('open');
    const wasPlaying = !video.paused && !video.ended;

    video.pause();
    video.src = desired;
    video.load();

    if (wasOpen && wasPlaying) {
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      }, { once: true });
    }
  }

  updateLineSupportVideoControls();
}

function updateLineSupportVideoControls() {
  const video = document.getElementById('lineSupportVideo');
  const play = document.getElementById('lineSupportVideoPlay');
  const seek = document.getElementById('lineSupportVideoSeek');
  const current = document.getElementById('lineSupportVideoCurrent');
  const duration = document.getElementById('lineSupportVideoDuration');

  if (!video) return;

  const total = Number.isFinite(video.duration) ? video.duration : 0;
  const now = Number.isFinite(video.currentTime) ? video.currentTime : 0;
  const isPlaying = !video.paused && !video.ended;

  if (play) {
    play.textContent = isPlaying
      ? (currentLang === 'th' ? '❚❚ หยุดชั่วคราว' : '❚❚ Pause')
      : (currentLang === 'th' ? '▶ เล่น' : '▶ Play');
  }

  if (seek && !seek.matches(':active')) {
    seek.max = String(total);
    seek.value = String(Math.min(now, total || now));
  }

  if (current) current.textContent = formatLineSupportVideoTime(now);
  if (duration) duration.textContent = formatLineSupportVideoTime(total);
}

function openLineSupportVideo() {
  const modal = document.getElementById('lineSupportVideoModal');
  const video = document.getElementById('lineSupportVideo');

  if (!modal || !video) return;

  updateLineSupportVideoLanguage();

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('line-support-video-open');

  /* User clicked the demo button, so browsers normally allow playback here. */
  video.play().catch(() => {
    updateLineSupportVideoControls();
  });

  document.getElementById('lineSupportVideoClose')?.focus();
}

function closeLineSupportVideo() {
  const modal = document.getElementById('lineSupportVideoModal');
  const video = document.getElementById('lineSupportVideo');

  if (!modal) return;

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('line-support-video-open');

  updateLineSupportVideoControls();
  document.getElementById('lineSupportDemoBtn')?.focus();
}

function initLineSupportVideoControls() {
  const modal = document.getElementById('lineSupportVideoModal');
  const video = document.getElementById('lineSupportVideo');
  const play = document.getElementById('lineSupportVideoPlay');
  const seek = document.getElementById('lineSupportVideoSeek');
  const close = document.getElementById('lineSupportVideoClose');

  updateLineSupportVideoLanguage();

  close?.addEventListener('click', closeLineSupportVideo);

  modal?.querySelector('[data-line-support-close]')
    ?.addEventListener('click', closeLineSupportVideo);

  play?.addEventListener('click', () => {
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => {
        updateLineSupportVideoControls();
      });
    } else {
      video.pause();
    }
  });

  seek?.addEventListener('input', () => {
    if (!video || !Number.isFinite(video.duration)) return;

    video.currentTime = Math.max(
      0,
      Math.min(video.duration, Number(seek.value) || 0)
    );

    updateLineSupportVideoControls();
  });

  if (video) {
    [
      'loadedmetadata',
      'durationchange',
      'timeupdate',
      'play',
      'pause',
      'ended',
      'seeked'
    ].forEach(eventName => {
      video.addEventListener(eventName, updateLineSupportVideoControls);
    });
  }
}

/* Robust delegated click:
   works for both the standalone LINE OA card and the dynamically rendered card. */
document.addEventListener('click', event => {
  const trigger = event.target.closest(
    '#lineSupportDemoBtn, #line-support-demo, [data-line-support-demo]'
  );

  if (!trigger) return;

  event.preventDefault();
  openLineSupportVideo();
});

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initLineSupportVideoControls,
    { once: true }
  );
} else {
  initLineSupportVideoControls();
}


document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    document.getElementById('lineSupportVideoModal')?.classList.contains('open')
  ) {
    closeLineSupportVideo();
  }
});


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
              data-line-support-demo
              aria-haspopup="dialog"
              aria-controls="lineSupportVideoModal"
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
    .getElementById('line-support-demo')
    ?.addEventListener('click', openLineSupportVideo);

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
   FINAL 12-STEP JOURNEY PATCH — 14 SEP 2026

   Final journey order:
   01 Registration & Patient Profile
   02 Health Profile
   03 Appointment, Notification & Check-in
   04 No Check-in Patient Follow-up
   05 Nurse Screening
   06 Doctor Consultation & AI
   07 Billing & Payment
   08 Follow-up & Next Appointment
   09 Medication Delivery
   10 Accept & Verify Medicine
   11 Appointment with Pharmacist
   12 Medical Guidance with Pharmacist

   Patient Visit History remains a supporting function inside
   Nurse Screening and Doctor Consultation, not a separate step.
   ========================================================= */

(() => {

  /* -------------------------------------------------------
     1) REORDER / RENUMBER EXISTING STEP OBJECTS
     ------------------------------------------------------- */

  const originalById = new Map(
    steps.map(step => [step.id, step])
  );

  const newOrder = [
    1,  // Registration
    2,  // Health Profile
    3,  // Appointment / Check-in
    4,  // No Check-in Follow-up
    5,  // Nurse Screening (reuse former Visit History object)
    6,  // Doctor Consultation + AI
    7,  // Billing & Payment
    12, // Follow-up & Next Appointment
    8,  // Delivery
    9,  // Medication Verify
    10, // Pharmacist Appointment
    11  // Pharmacist Counseling
  ];

  /* Use the exact filenames currently in /image. */
  const iconByNewId = {
    1: '01-registration.png',
    2: '02-health-profile.png',
    3: '03-appointment-checkin.png',
    4: '04-nurse-followup.png',
    5: '05 Nurse Screening.png',
    6: '06-Doctor Consult AI.png',
    7: '09-Icon-Payment.png',
    8: '07-followup.png',
    9: '08-delivery.png',
    10: '10-medication-verify.png',
    11: '11-pharmacist-appointment.png',
    12: '12-pharmacist-counseling.png'
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
     Patient enters data first. Nurse confirms in Step 05.
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
     Locked rule: No Check-in = Not in Queue.
     ------------------------------------------------------- */

  const step04 = steps.find(step => step.id === 4);

  if (step04) {
    step04.role = 'nurse';
    step04.roles = ['nurse'];
    step04.hasBithisApi = false;

    step04.th.title = 'ติดตามผู้ป่วยที่ยังไม่เช็กอิน';
    step04.th.short = 'ติดตามผู้ป่วย';
    step04.th.desc =
      'ติดตามผู้ป่วยที่ถึงเวลานัดแล้วแต่ยังไม่เช็กอิน ซึ่งหมายถึงยังไม่เข้าสู่คิว พร้อมระบบแจ้งเตือน การติดตามโดยพยาบาล และการเก็บประวัติย้อนหลัง';

    step04.en.title = 'No Check-in Patient Follow-up';
    step04.en.short = 'No Check-in follow-up';
    step04.en.desc =
      'Follow patients who have reached their appointment time but have not checked in, meaning they have not entered the queue, with reminders, nurse follow-up and audit history.';

    step04.th.features = [
      'ระบบส่ง Reminder ผ่าน LINE OA ก่อนเวลานัดอัตโนมัติ เช่น 30, 15, 10, 5, 3 และ 1 นาที',
      'เมื่อถึงเวลานัดแล้วผู้ป่วยยังไม่เช็กอิน (= ยังไม่เข้าสู่คิว) ระบบเพิ่มผู้ป่วยเข้าสู่รายการ “ต้องโทรติดตามวันนี้” อัตโนมัติ',
      'แสดงชื่อผู้ป่วย HN แพทย์ เวลานัด จำนวนเวลาที่สาย เบอร์โทร จำนวนครั้งที่ติดตาม และเวลาติดตามล่าสุด',
      'พยาบาลโทรหาผู้ป่วยหรือส่งลิงก์เช็กอินซ้ำผ่าน LINE OA ได้',
      'พยาบาลสามารถตั้งเวลาติดตามซ้ำ เช่น 5 หรือ 10 นาที',
      'บันทึกผลการติดตาม เช่น ติดต่อได้และกำลังเข้าระบบ, ขอเลื่อนนัด, ยกเลิกนัด, ไม่รับสาย หรือเบอร์ไม่ถูกต้อง',
      'เก็บ Attempt No., เวลา, พยาบาลผู้ติดตาม, ผลการติดต่อ และหมายเหตุเป็น Audit Trail',
      'เมื่อผู้ป่วยเช็กอินสำเร็จ ระบบนำผู้ป่วยออกจากรายการติดตามและเข้าสู่ Waiting / Screening Queue อัตโนมัติ'
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
      'ถึงเวลานัดแล้วยังไม่เช็กอิน',
      'เข้าสู่รายการติดตาม',
      'พยาบาลโทร / ส่งลิงก์ซ้ำ',
      'บันทึกผลการติดตาม',
      'ผู้ป่วยเช็กอิน',
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
      'ยังไม่เช็กอิน = ยังไม่เข้าสู่คิว',
      'ขั้นตอนนี้ดำเนินการภายใน BIT Telemedicine และไม่มี API เชื่อมไป BITHIS',
      'เมื่อผู้ป่วยเช็กอินและเข้าสู่ Waiting / Screening Queue แล้ว ต้องนำผู้ป่วยออกจากรายการติดตามโดยอัตโนมัติ',
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
     4) STEP 05 — NURSE SCREENING ONLY
     ------------------------------------------------------- */

  const step05 = steps.find(step => step.id === 5);

  if (step05) {
    step05.role = 'nurse';
    step05.roles = ['nurse'];
    step05.hasBithisApi = true;

    step05.th.title = 'คัดกรองผู้ป่วย';
    step05.th.short = 'คัดกรองผู้ป่วย';
    step05.th.desc =
      'พยาบาลตรวจสอบข้อมูลผู้ป่วยและประวัติ Visit เดิม ทบทวนข้อมูลคัดกรองและ Vital Signs ที่ผู้ป่วยกรอกไว้ จัดลำดับความสำคัญ ยืนยันข้อมูล และ Sync Vital Signs เข้า BITHIS ก่อนส่งต่อแพทย์';

    step05.en.title = 'Nurse Screening';
    step05.en.short = 'Nurse screening';
    step05.en.desc =
      'The nurse reviews patient information and prior Visit history, checks patient-entered screening data and vital signs, confirms triage, syncs vital signs to BITHIS, and then hands the patient off to the doctor.';

    step05.th.features = [
      'พยาบาลเปิดดู Visit History ของผู้ป่วยตามสิทธิ์ โดยข้อมูลต้องผูกกับ Visit หรือ Appointment ID',
      'ตรวจสอบข้อมูล Health Profile และ Vital Signs ที่ผู้ป่วยกรอกไว้ในขั้นตอนที่ 02',
      'พยาบาลสามารถแก้ไขหรือเพิ่มข้อมูลคัดกรองและ Vital Signs ได้ก่อนยืนยัน',
      'ความดันโลหิต (BP) เป็นข้อมูลบังคับก่อนยืนยันการคัดกรอง',
      'ประเมินความเร่งด่วนและจัดลำดับผู้ป่วยตาม Workflow ของโรงพยาบาล',
      'เมื่อพยาบาลยืนยัน Vital Signs ระบบ Sync ข้อมูลเข้า BITHIS ผ่าน API',
      'หาก Sync ไม่สำเร็จ ต้องแสดง Error และ Retry โดยยังไม่ส่งต่อแพทย์',
      'เมื่อ Sync สำเร็จ จึงยืนยันการคัดกรองและส่งผู้ป่วยต่อให้แพทย์'
    ];

    step05.en.features = [
      'Nurse can open Visit History by permission; data must be linked to Visit or Appointment ID',
      'Review Health Profile and Vital Signs entered by the patient in Step 02',
      'Nurse can correct or add screening information and vital signs before confirmation',
      'Blood pressure (BP) is required before screening confirmation',
      'Assess urgency and prioritize the patient according to hospital workflow',
      'After nurse confirmation, sync Vital Signs to BITHIS via API',
      'If sync fails, show Error and Retry and do not hand off to the doctor',
      'After successful sync, confirm screening and send the patient to the doctor'
    ];

    step05.th.benefits = [
      'พยาบาลเห็นข้อมูลปัจจุบันและประวัติ Visit เดิมก่อนส่งต่อแพทย์',
      'ลดการบันทึก Vital Signs ซ้ำและเชื่อมข้อมูลเข้าสู่ BITHIS อย่างเป็นระบบ',
      'ลดความเสี่ยงจากข้อมูลคนละ Visit ปะปนกัน',
      'ทำให้แพทย์ได้รับข้อมูลคัดกรองที่ผ่านการตรวจสอบแล้ว'
    ];

    step05.en.benefits = [
      'Gives the nurse current data and prior Visit history before doctor handoff',
      'Reduces duplicate vital-sign entry and connects confirmed data to BITHIS',
      'Reduces the risk of mixing data across Visits',
      'Provides the doctor with nurse-verified screening information'
    ];

    step05.th.flow = [
      'เปิด Visit History',
      'ตรวจข้อมูลคัดกรองและ Vital Signs',
      'ประเมินความเร่งด่วน / จัดลำดับ',
      'ยืนยัน Vital Signs',
      'Sync BITHIS',
      'Sync สำเร็จ',
      'ส่งต่อแพทย์'
    ];

    step05.en.flow = [
      'Open Visit History',
      'Review Screening & Vital Signs',
      'Assess Urgency / Prioritize',
      'Confirm Vital Signs',
      'Sync BITHIS',
      'Sync Success',
      'Hand Off to Doctor'
    ];

    step05.th.integration = [
      'Vital Signs หลังพยาบาลยืนยัน'
    ];

    step05.en.integration = [
      'Vital Signs after nurse confirmation'
    ];

    step05.th.notes = [
      'Patient Visit History ไม่ได้นับเป็น Step แยก แต่เป็นฟังก์ชันที่พยาบาลเปิดดูได้ระหว่างการคัดกรอง',
      'ข้อมูลประวัติการรักษาต้องผูกกับ Visit หรือ Appointment ID',
      'หาก Sync Vital Signs ไม่สำเร็จ ต้องแสดง Error และ Retry โดยยังไม่ส่งต่อแพทย์',
      'ส่งต่อแพทย์ได้เมื่อ Vital Signs Sync เข้า BITHIS สำเร็จแล้ว'
    ];

    step05.en.notes = [
      'Patient Visit History is not a separate journey step; it is available during nurse screening.',
      'Clinical history must be linked to Visit or Appointment ID.',
      'If Vital Signs sync fails, show Error and Retry and do not hand off to the doctor.',
      'Doctor handoff is available only after successful Vital Signs sync to BITHIS.'
    ];

    step05.th.status = ['modify', 'new'];
    step05.en.status = ['modify', 'new'];
  }


  /* -------------------------------------------------------
     5) STEP 06 — DOCTOR CONSULTATION + AI ONLY
     ------------------------------------------------------- */

  const step06 = steps.find(step => step.id === 6);

  if (step06) {
    step06.role = 'doctor';
    step06.roles = ['doctor', 'patient'];
    step06.hasBithisApi = true;

    step06.th.title = 'พบแพทย์และ AI ช่วยจัดทำเอกสารทางคลินิก';
    step06.th.short = 'พบแพทย์และ AI';
    step06.th.desc =
      'แพทย์เปิดดู Visit History และข้อมูลคัดกรองที่พยาบาลยืนยันแล้ว ตรวจผู้ป่วยผ่าน Video Call และใช้ AI ช่วยถอดเสียง สรุป SOAP แนะนำ ICD-10 และสร้าง OPD Draft โดยแพทย์เป็นผู้ตรวจสอบ แก้ไข และยืนยันข้อมูลสุดท้าย';

    step06.en.title = 'Doctor Consultation & AI';
    step06.en.short = 'Doctor consult & AI';
    step06.en.desc =
      'The doctor reviews Visit History and nurse-confirmed screening data, consults the patient by video, and uses AI for transcript, SOAP summary, ICD-10 recommendations and an OPD draft. The doctor reviews, edits and confirms the final clinical content.';

    step06.th.features = [
      'แพทย์เปิดดู Visit History และข้อมูลคัดกรองก่อนหรือระหว่าง Video Consultation ได้',
      'หน้า Consultation แสดง Video Call พร้อม AI Subtitle / Transcript แบบเรียลไทม์ใต้หน้าวิดีโอ',
      'Chat แสดงแยกทางด้านขวา โดย AI Subtitle / Transcript และ Chat เป็นคนละส่วน',
      'AI ถอดเสียงการสนทนาแบบ Real-time และแยกผู้พูด',
      'หลังการตรวจ AI ช่วยสร้าง Transcript → SOAP Summary → ICD-10 Recommendation → OPD Draft',
      'แพทย์ตรวจสอบ แก้ไข และยืนยันข้อมูลทางคลินิกก่อนบันทึกเป็นข้อมูลสุดท้าย',
      'รองรับ Save Draft และ Save Final ตาม Workflow ของโรงพยาบาล',
      'AI มีหน้าที่ช่วยสรุป แนะนำ และสร้างร่างเท่านั้น ไม่ยืนยันผลการรักษาแทนแพทย์'
    ];

    step06.en.features = [
      'Doctor can open Visit History and nurse-confirmed screening data before or during the video consultation',
      'Consultation screen shows Video Call with real-time AI Subtitle / Transcript below the video',
      'Chat stays in a separate panel on the right; AI Subtitle / Transcript is not Chat',
      'AI transcribes the consultation in real time with speaker separation',
      'After consultation: Transcript → SOAP Summary → ICD-10 Recommendation → OPD Draft',
      'Doctor reviews, edits and confirms the final clinical content',
      'Support Save Draft and Save Final according to hospital workflow',
      'AI assists, recommends and drafts only; the doctor remains the final clinical decision-maker'
    ];

    step06.th.benefits = [
      'แพทย์เห็นประวัติและข้อมูลคัดกรองที่ผ่านการยืนยันก่อนเริ่มตรวจ',
      'ลดภาระการจัดทำเอกสารทางคลินิกด้วย AI',
      'ช่วยให้การสรุป SOAP และการเลือก ICD-10 มีโครงสร้างชัดเจน',
      'แพทย์ยังคงเป็นผู้ตรวจสอบและยืนยันข้อมูลสุดท้าย'
    ];

    step06.en.benefits = [
      'Gives the doctor verified history and screening information before consultation',
      'Reduces clinical documentation workload with AI assistance',
      'Provides structured SOAP and ICD-10 support',
      'Keeps the doctor in control of final clinical confirmation'
    ];

    step06.th.flow = [
      'แพทย์เปิด Visit History',
      'เริ่ม Video Call',
      'AI ถอดเสียงแบบ Real-time',
      'AI สรุป SOAP',
      'AI แนะนำ ICD-10',
      'AI Draft OPD (อยู่ระหว่างพัฒนา)',
      'แพทย์ตรวจสอบ / แก้ไข',
      'แพทย์ยืนยันข้อมูลสุดท้าย'
    ];

    step06.en.flow = [
      'Open Visit History',
      'Start Video Call',
      'AI Real-time Transcript',
      'AI SOAP Summary',
      'AI ICD-10 Recommendation',
      'AI OPD Draft',
      'Doctor Review / Edit',
      'Doctor Final Confirmation'
    ];

    step06.th.integration = [
      'รอยืนยัน: API รายการยา ค่าแพทย์ ค่ายา และค่าบริการโรงพยาบาล — ต้องยืนยันว่าจะคีย์รายการยาและค่าใช้จ่ายใน BIT Telemedicine หรือ BITHIS'
    ];

    step06.en.integration = [
      'Pending confirmation: API for medication list, doctor fee, medication fee and hospital service fee — confirm whether medication and charges will be entered in BIT Telemedicine or BITHIS'
    ];

    step06.th.notes = [
      'Patient Visit History ไม่ได้นับเป็น Step แยก แต่แพทย์สามารถเปิดดูได้ก่อนหรือระหว่างการตรวจ',
      'ข้อมูลประวัติการรักษาต้องผูกกับ Visit หรือ Appointment ID',
      'AI Subtitle / Transcript ต้องอยู่ใต้ Video และ Chat ต้องอยู่ด้านขวาอย่างชัดเจน',
      'AI เป็นผู้ช่วยเสนอ สรุป และสร้างร่างเท่านั้น แพทย์เป็นผู้ตรวจสอบ แก้ไข และยืนยันข้อมูลสุดท้าย',
      'รอยืนยัน Workflow การคีย์รายการยา ค่าแพทย์ ค่ายา และค่าบริการโรงพยาบาล ว่าจะบันทึกผ่าน BIT Telemedicine หรือ BITHIS รวมถึงรูปแบบ API / Interface ระหว่างสองระบบ'
    ];

    step06.en.notes = [
      'Patient Visit History is not a separate journey step; the doctor can open it before or during consultation.',
      'Clinical history must be linked to Visit or Appointment ID.',
      'AI Subtitle / Transcript stays below the video and Chat stays on the right.',
      'AI assists, recommends and drafts; the doctor reviews, edits and confirms the final clinical content.',
      'Pending confirmation: confirm whether the medication list, doctor fee, medication fee and hospital service fee will be entered in BIT Telemedicine or BITHIS, including the required API / interface.'
    ];

    step06.th.status = ['modify', 'new', 'pending'];
    step06.en.status = ['modify', 'new', 'pending'];
  }


  /* -------------------------------------------------------
     6) STEP 07 — BILLING & PAYMENT
     ------------------------------------------------------- */

  const step07 = steps.find(step => step.id === 7);

  if (step07) {
    step07.role = 'nurse';
    step07.roles = ['nurse', 'patient', 'cashier'];
    step07.hasBithisApi = true;
  }


  /* -------------------------------------------------------
     7) STEP 08 — FOLLOW-UP & NEXT APPOINTMENT
     ------------------------------------------------------- */

  const step08 = steps.find(step => step.id === 8);

  if (step08) {
    step08.role = 'nurse';
    step08.roles = ['nurse', 'patient'];
    step08.hasBithisApi = true;

    step08.th.title = 'ติดตามอาการและนัดหมายครั้งถัดไป';
    step08.th.short = 'ติดตามและนัดครั้งถัดไป';
    step08.th.desc =
      'หลังผู้ป่วยชำระเงินเรียบร้อยแล้ว พยาบาลสามารถติดตามอาการและจัดทำนัด Follow-up ครั้งถัดไปได้ทันที เพื่อให้การดูแลต่อเนื่องก่อนเข้าสู่ขั้นตอนจัดส่งยาและการดูแลด้านยา';

    step08.en.title = 'Follow-up & Next Appointment';
    step08.en.short = 'Follow-up & next visit';
    step08.en.desc =
      'After successful payment, the nurse can follow up with the patient and create the next follow-up appointment, supporting continuous care before medication delivery and pharmacist care.';

    step08.th.features = [
      'แพทย์สามารถระบุแผนหรือช่วงเวลาที่ต้อง Follow-up ไว้จากขั้นตอนการตรวจ',
      'หลังชำระเงินสำเร็จ พยาบาลสามารถติดตามอาการและสร้างนัดหมายครั้งถัดไปได้',
      'พยาบาลสามารถอัปเดตรายละเอียดนัด Follow-up ตามแผนการรักษา',
      'ส่งการยืนยันนัด Reminder และ Notification ผ่าน LINE OA',
      'ผู้ป่วยดูรายละเอียดนัดหมายครั้งถัดไปได้ผ่าน Life App',
      'เมื่อถึงรอบนัดใหม่ ผู้ป่วยกลับเข้าสู่ขั้นตอนนัดหมายและเช็กอินตาม Journey เดิม'
    ];

    step08.en.features = [
      'Doctor can define the follow-up plan or interval during consultation',
      'After successful payment, the nurse can follow up and create the next appointment',
      'Nurse can update follow-up appointment details according to the care plan',
      'Send appointment confirmation, reminders and notifications through LINE OA',
      'Patient can view the next appointment through the Life App',
      'At the next visit, the patient returns to the appointment and check-in journey'
    ];

    step08.th.benefits = [
      'นัด Follow-up ได้ต่อเนื่องทันทีหลังชำระเงิน',
      'ลดโอกาสผู้ป่วยหลุดจากการติดตามรักษา',
      'เชื่อม Visit ปัจจุบันกับ Visit ครั้งถัดไปได้ชัดเจน'
    ];

    step08.en.benefits = [
      'Allows continuous follow-up scheduling immediately after payment',
      'Reduces loss to follow-up',
      'Clearly connects the current Visit with the next Visit'
    ];

    step08.th.flow = [
      'ชำระเงินสำเร็จ',
      'พยาบาลติดตามอาการ',
      'ตรวจสอบแผน Follow-up',
      'สร้างนัดครั้งถัดไป',
      'แจ้งเตือนผ่าน LINE OA',
      'ผู้ป่วยดูนัดครั้งถัดไป',
      'กลับเข้าสู่ Appointment Journey เมื่อถึงรอบนัด'
    ];

    step08.en.flow = [
      'Payment Completed',
      'Nurse Follow-up',
      'Review Follow-up Plan',
      'Create Next Appointment',
      'LINE OA Notification',
      'Patient Views Next Appointment',
      'Return to Appointment Journey at Next Visit'
    ];

    step08.th.integration = [
      'ข้อมูลนัดหมายครั้งถัดไป',
      'ข้อมูลแพทย์ / ตารางนัด'
    ];

    step08.en.integration = [
      'Next Appointment Data',
      'Doctor / Schedule Data'
    ];

    step08.th.notes = [
      'ขั้นตอนนี้อยู่หลัง Step 07 ค่าใช้จ่ายและชำระเงิน',
      'พยาบาลเป็นผู้ดำเนินการสร้างนัด Follow-up ในขั้นตอนนี้',
      'เมื่อถึงรอบนัดใหม่ ผู้ป่วยใช้กติกาการแจ้งเตือนและเช็กอินตามขั้นตอนที่ 03'
    ];

    step08.en.notes = [
      'This step is positioned immediately after Step 07 Billing & Payment.',
      'The nurse creates the follow-up appointment in this step.',
      'At the next appointment, notification and check-in rules follow Step 03.'
    ];
  }


  /* -------------------------------------------------------
     8) FINAL ROLE / API META FOR 12 STEPS
     ------------------------------------------------------- */

  const finalMeta = {
    1: { roles: ['patient', 'nurse'], hasBithisApi: true },
    2: { roles: ['patient'], hasBithisApi: false },
    3: { roles: ['patient', 'nurse'], hasBithisApi: true },
    4: { roles: ['nurse'], hasBithisApi: false },
    5: { roles: ['nurse'], hasBithisApi: true },
    6: { roles: ['doctor', 'patient'], hasBithisApi: true },
    7: { roles: ['nurse', 'patient', 'cashier'], hasBithisApi: true },
    8: { roles: ['nurse', 'patient'], hasBithisApi: true },
    9: { roles: ['patient', 'pharmacist', 'cashier'], hasBithisApi: true },
    10: { roles: ['patient'], hasBithisApi: false },
    11: { roles: ['patient', 'pharmacist'], hasBithisApi: false },
    12: { roles: ['pharmacist', 'patient'], hasBithisApi: false }
  };

  steps.forEach(step => {
    const meta = finalMeta[step.id];
    if (!meta) return;
    step.roles = [...meta.roles];
    step.hasBithisApi = meta.hasBithisApi;
    ACTUAL_STEP_META[step.id] = {
      roles: [...meta.roles],
      hasBithisApi: meta.hasBithisApi
    };
  });


  /* -------------------------------------------------------
     9) ROLE ACTIONS FOR FINAL NUMBERING
     ------------------------------------------------------- */

  ROLE_ACTIONS[5] = {
    nurse: {
      th: 'เปิด Visit History ตรวจข้อมูลคัดกรอง ยืนยัน Vital Signs และส่งต่อแพทย์',
      en: 'Review Visit history, confirm screening and vital signs, then hand off to the doctor'
    }
  };

  ROLE_ACTIONS[6] = {
    doctor: {
      th: 'ดูประวัติการรักษา ตรวจผ่าน Video Call และยืนยันเอกสารทางคลินิก',
      en: 'Review history, consult by video and confirm clinical documentation'
    },
    patient: {
      th: 'เข้าร่วม Video Call กับแพทย์',
      en: 'Join the doctor video consultation'
    }
  };

  ROLE_ACTIONS[7] = {
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

  ROLE_ACTIONS[8] = {
    nurse: {
      th: 'ติดตามอาการและสร้างนัด Follow-up ครั้งถัดไปหลังชำระเงิน',
      en: 'Follow up and create the next appointment after payment'
    },
    patient: {
      th: 'รับการติดตามและดูรายละเอียดนัดครั้งถัดไป',
      en: 'Receive follow-up and view the next appointment'
    }
  };

  ROLE_ACTIONS[9] = {
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

  ROLE_ACTIONS[10] = {
    patient: {
      th: 'ยืนยันรับยา ตรวจสอบยา และส่งรูปหรือวิดีโอ',
      en: 'Confirm receipt, verify medication and upload photo/video'
    }
  };

  ROLE_ACTIONS[11] = {
    patient: {
      th: 'เลือกนัด เช็กอิน และรอเภสัชกร',
      en: 'Book, check in and wait for the pharmacist'
    },
    pharmacist: {
      th: 'เปิดตารางนัดและบริหารคิว',
      en: 'Open schedule and manage the queue'
    }
  };

  ROLE_ACTIONS[12] = {
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
     10) ROLE ORDER BADGES / REMARKS
     ------------------------------------------------------- */

  Object.keys(ROLE_ORDER_BADGES).forEach(key => {
    delete ROLE_ORDER_BADGES[key];
  });

  [6, 7, 8, 9, 11, 12].forEach(stepId => {
    ROLE_ORDER_BADGES[stepId] = true;
  });

  /* Keep Step 01 and Step 03 original multi-role remarks only. */
  Object.keys(ROLE_INLINE_REMARKS).forEach(key => {
    const id = Number(key);
    if (![1, 3].includes(id)) {
      delete ROLE_INLINE_REMARKS[key];
    }
  });


  /* -------------------------------------------------------
     11) UI LABELS
     ------------------------------------------------------- */

  UI_TEXT.th.journeyTitle = 'เส้นทางการดูแลผู้ป่วย 12 ขั้นตอน';
  UI_TEXT.en.journeyTitle = '12-Step Patient Journey';

})();


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.getElementById('step-presentation-overlay')) {
    closeStepPresentation();
  }
});


/* =========================================================
   DEVELOPMENT & PROJECT STATUS — FULL-SCREEN VIEWER
   - Uses the same TH / EN setting as the website
   - Responsive on Computer / iPad / Phone
   - Preserves page scroll position when closed
   ========================================================= */

let developmentViewerScrollY = 0;
let developmentViewerTrigger = null;

function openDevelopmentViewer(trigger) {

  const viewer =
    document.getElementById('developmentViewer');

  const image =
    document.getElementById('developmentViewerImage');

  const title =
    document.getElementById('developmentViewerTitle');


  if (!viewer || !image || !title || !trigger) {
    return;
  }


  developmentViewerScrollY =
    window.scrollY || window.pageYOffset || 0;

  developmentViewerTrigger =
    trigger;


  const imageSrc =
    currentLang === 'en'
      ? (trigger.dataset.imageEn || trigger.dataset.imageTh || '')
      : (trigger.dataset.imageTh || trigger.dataset.imageEn || '');

  const viewerTitle =
    trigger.dataset[currentLang] ||
    trigger.textContent.trim();


  image.src =
    imageSrc;

  image.alt =
    viewerTitle;

  title.textContent =
    viewerTitle;


  viewer.classList.add('open');

  viewer.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'development-viewer-open'
  );


  document
    .getElementById('developmentViewerClose')
    ?.focus();

}


function closeDevelopmentViewer() {

  const viewer =
    document.getElementById('developmentViewer');

  const image =
    document.getElementById('developmentViewerImage');


  if (!viewer) {
    return;
  }


  viewer.classList.remove('open');

  viewer.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'development-viewer-open'
  );


  if (image) {
    image.src = '';
  }


  window.scrollTo(
    0,
    developmentViewerScrollY
  );


  developmentViewerTrigger
    ?.focus();

  developmentViewerTrigger =
    null;

}


function updateDevelopmentViewerLanguage() {

  const viewer =
    document.getElementById('developmentViewer');

  const title =
    document.getElementById('developmentViewerTitle');


  if (
    viewer?.classList.contains('open') &&
    developmentViewerTrigger &&
    title
  ) {

    const translatedTitle =
      developmentViewerTrigger.dataset[currentLang] ||
      developmentViewerTrigger.textContent.trim();

    title.textContent =
      translatedTitle;

    const image =
      document.getElementById('developmentViewerImage');

    if (image) {
      image.alt = translatedTitle;

      const translatedImageSrc =
        currentLang === 'en'
          ? (
              developmentViewerTrigger.dataset.imageEn ||
              developmentViewerTrigger.dataset.imageTh ||
              ''
            )
          : (
              developmentViewerTrigger.dataset.imageTh ||
              developmentViewerTrigger.dataset.imageEn ||
              ''
            );

      if (
        translatedImageSrc &&
        image.getAttribute('src') !== translatedImageSrc
      ) {
        image.src = translatedImageSrc;
      }
    }

  }

}


function bindDevelopmentViewer() {

  document
    .querySelectorAll('.development-link')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => openDevelopmentViewer(button)
      );

    });


  document
    .getElementById('developmentViewerBack')
    ?.addEventListener(
      'click',
      closeDevelopmentViewer
    );


  document
    .getElementById('developmentViewerClose')
    ?.addEventListener(
      'click',
      closeDevelopmentViewer
    );


  const viewer =
    document.getElementById('developmentViewer');

  viewer?.addEventListener(
    'click',
    event => {

      if (event.target === viewer) {
        closeDevelopmentViewer();
      }

    }
  );


  document.addEventListener(
    'keydown',
    event => {

      if (
        event.key === 'Escape' &&
        viewer?.classList.contains('open')
      ) {

        closeDevelopmentViewer();

      }

    }
  );

}



/* =========================================================
   CINEMATIC PATIENT JOURNEY — V5 ASTRA-INSPIRED STORYTELLING
   Updated 20 Sep 2026
   - Audio currentTime is the master timeline
   - TH / EN use separate scene + step cue timelines
   - 100% artwork visible: no crop
   - Step focus moves 01→12 inside the artwork
   - Flow pulse + scene-specific micro animation
   - Captions/status live OUTSIDE the artwork
   - Play / Pause / Seek keep audio + scene + step in sync
   ========================================================= */

const HERO_NARRATION_TOTAL = 80;

/* Latest narration structure supplied by Kat:
   Scene 1 = ~13s, Scene 2 = ~14s, Scene 3 = ~14s,
   Scene 4 = ~13s, Scene 5 = ~13s, Scene 6 = ~13s.
   The nominal 80-second map is automatically scaled to the REAL audio duration
   after metadata loads, so TH and EN remain synchronized even if the exported
   WAV files contain slightly different pauses/tails. */
const HERO_ASSETS = {
  th: {
    audio: 'image/Sound-Hero/Sound-Hero-TH/Sound-Hero-TH.wav',
    scenes: Array.from({length:6},(_,i)=>`image/PIC-Hero/PIC-Hero-TH/Scene${i+1}-TH.png`),
    videos: Array.from({length:6},(_,i)=>`image/VDO-Hero/th/${i+1}-TH-NS.mov`),
    sceneCuts: [0, 13, 27, 41, 54, 67, 80],
    stepCues: [
      {time:0,step:'01'}, {time:4.3,step:'02'}, {time:8.7,step:'03'},
      {time:13,step:'04'}, {time:20,step:'05'},
      {time:27,step:'06'},
      {time:41,step:'07'}, {time:47.5,step:'08'},
      {time:54,step:'09'}, {time:60.5,step:'10'},
      {time:67,step:'11'}, {time:73.5,step:'12'}
    ]
  },
  en: {
    audio: 'image/Sound-Hero/Sound-Hero-EN/Sound-Hero-EN.wav',
    scenes: Array.from({length:6},(_,i)=>`image/PIC-Hero/PIC-Hero-EN/Scene${i+1}-EN.png`),
    videos: Array.from({length:6},(_,i)=>`image/VDO-Hero/en/${i+1}-EN-NS.mov`),
    sceneCuts: [0, 13, 27, 41, 54, 67, 80],
    stepCues: [
      {time:0,step:'01'}, {time:4.3,step:'02'}, {time:8.7,step:'03'},
      {time:13,step:'04'}, {time:20,step:'05'},
      {time:27,step:'06'},
      {time:41,step:'07'}, {time:47.5,step:'08'},
      {time:54,step:'09'}, {time:60.5,step:'10'},
      {time:67,step:'11'}, {time:73.5,step:'12'}
    ]
  }
};

const HERO_SCENE_META = [
  {steps:'01–03',th:'ลงทะเบียนและตั้งค่าโปรไฟล์ → ข้อมูลสุขภาพและสัญญาณชีพ → นัดหมาย แจ้งเตือน และเช็กอิน',en:'Registration & Profile → Health Information & Vital Signs → Appointment, Notification & Check-in'},
  {steps:'04–05',th:'ติดตามผู้ป่วยที่ยังไม่เข้าสู่ระบบ → เช็กอิน → พยาบาลซักอาการ ตรวจสัญญาณชีพ และประเมินความเร่งด่วน',en:'Patient Follow-up → Check-in → Nurse Symptoms, Vital Signs & Priority Assessment'},
  {steps:'06',th:'วิดีโอคอลกับแพทย์ → AI ถอดบทสนทนา → SOAP Note → ICD-10 → ร่างข้อมูล OPD',en:'Doctor Video Consultation → AI Transcription → SOAP Note → ICD-10 → OPD Draft'},
  {steps:'07–08',th:'BITHIS / ค่าใช้จ่ายและการเงิน → วิธีจัดส่งยา → ชำระเงิน → นัดหมายครั้งถัดไป',en:'BITHIS / Billing & Payment → Medication Delivery → Payment → Next Appointment'},
  {steps:'09–10',th:'เภสัชกรตรวจสอบใบสั่งยาและเตรียมยา → จัดส่ง → ผู้ป่วยตรวจสอบและส่งรูป/วิดีโอ → เภสัชกรยืนยัน',en:'Prescription Review & Medication Preparation → Delivery → Patient Photo/Video → Pharmacist Verification'},
  {steps:'11–12',th:'นัดหมายและเช็กอิน → วิดีโอคอลกับเภสัชกร → คำแนะนำเรื่องยาและข้อควรระวัง → จบเส้นทาง 12 ขั้นตอน',en:'Appointment & Check-in → Pharmacist Video Consultation → Medication Counseling & Precautions → Complete 12-Step Journey'}
];

function getHeroTimelineScale() {
  if (heroAudio && Number.isFinite(heroAudio.duration) && heroAudio.duration > 0) {
    return heroAudio.duration / HERO_NARRATION_TOTAL;
  }
  return 1;
}

function getHeroEffectiveSceneCuts() {
  const scale = getHeroTimelineScale();
  return getHeroConfig().sceneCuts.map(t => t * scale);
}

function getHeroEffectiveStepCues() {
  const scale = getHeroTimelineScale();
  return getHeroConfig().stepCues.map(cue => ({ ...cue, time: cue.time * scale }));
}

let heroSceneIndex = 0;
let heroActiveStep = '01';
let heroAudio = null;
let heroInitialized = false;
let heroSeeking = false;
let heroWasPlayingBeforeSeek = false;
let heroRaf = 0;

function getHeroConfig() {
  return HERO_ASSETS[currentLang === 'en' ? 'en' : 'th'];
}

function formatHeroTime(seconds) {
  const safe = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const min = Math.floor(safe / 60);
  const sec = Math.floor(safe % 60);
  return `${min}:${String(sec).padStart(2, '0')}`;
}

function buildHeroAnimation() {
  const stage = document.getElementById('heroAnimationStage');
  if (!stage) return;

  stage.setAttribute('aria-hidden', 'false');

  stage.innerHTML = `
    <div class="hero-cinema" id="heroCinema">

      <div class="hero-orbit hero-orbit-a" aria-hidden="true"></div>
      <div class="hero-orbit hero-orbit-b" aria-hidden="true"></div>
      <div class="hero-cinema-glow" aria-hidden="true"></div>

      <div class="hero-cinema-heading">
        <div>
          <span class="hero-cinema-eyebrow">BIT TELEMEDICINE · PATIENT JOURNEY</span>
          <h2 data-th="จากบ้าน สู่การดูแลแบบครบวงจร" data-en="From Home to Connected Care">
            จากบ้าน สู่การดูแลแบบครบวงจร
          </h2>
        </div>
        <span class="hero-cinema-live">
          <i></i>
          <span data-th="12 ขั้นตอน · 6 ฉาก" data-en="12 STEPS · 6 SCENES">12 ขั้นตอน · 6 ฉาก</span>
        </span>
      </div>

      <div class="hero-scene-frame" id="heroSceneFrame">
        <div class="hero-scene-backdrop" aria-hidden="true"></div>

        ${Array.from({ length: 6 }, (_, index) => `
          <img
            class="hero-scene-image ${index === 0 ? 'active' : ''}"
            id="heroSceneImage${index + 1}"
            alt=""
            decoding="async"
            draggable="false"
          >
          <video
            class="hero-scene-video"
            id="heroSceneVideo${index + 1}"
            hidden
            muted
            playsinline
            webkit-playsinline
            preload="metadata"
            aria-hidden="true"
          ></video>
        `).join('')}
        <div class="hero-scene-ambient" aria-hidden="true"></div>
      </div>

      <div class="hero-story-status glass" aria-live="polite">
        <div class="hero-story-scene">
          <span class="hero-story-scene-number" id="heroSceneNumber">SCENE 1 / 6</span>
          <span class="hero-story-scene-steps" id="heroSceneSteps">STEPS 01–03</span>
        </div>
        <div class="hero-story-copy">
          <strong id="heroSceneCaption"></strong>
          <span id="heroActiveStep">STEP 01</span>
        </div>
      </div>

      <div class="hero-step-journey" id="heroStepJourney" aria-label="12-step animation progress">
        ${Array.from({ length: 12 }, (_, index) => {
          const step = String(index + 1).padStart(2, '0');
          return `<button class="hero-step-node ${index === 0 ? 'active' : ''}" data-step="${step}" type="button" aria-label="Go to step ${step}"><i></i><b>${step}</b></button>`;
        }).join('')}
        <span class="hero-step-progress" aria-hidden="true"></span>
      </div>

      <div class="hero-player glass" id="hero-player">
        <button class="hero-player-btn" id="heroPlayPause" type="button" aria-label="Play animation">
          <span class="hero-player-icon" id="heroPlayerIcon">▶</span>
        </button>

        <div class="hero-player-main">
          <div class="hero-player-meta">
            <span id="heroPlayerSceneLabel">Scene 1 · Steps 01–03</span>
            <span class="hero-player-time">
              <span id="heroCurrentTime">0:00</span>
              <span aria-hidden="true">/</span>
              <span id="heroDuration">0:00</span>
            </span>
          </div>

          <input
            class="hero-player-seek"
            id="heroSeek"
            type="range"
            min="0"
            max="100"
            value="0"
            step="0.05"
            aria-label="Animation timeline"
          >
        </div>
      </div>

      <div class="hero-step-thumbnails" id="heroStepThumbnails" aria-label="12-Step quick navigation">
        ${steps.slice(0,12).map((item,index)=>{
          const step=String(index+1).padStart(2,'0');
          return `<button class="hero-step-thumb ${index===0?'active':''}" data-step="${step}" type="button" aria-label="Go to step ${step}">
            <span class="hero-step-thumb-icon"><img src="image/${item.icon}" alt=""></span>
            <b>${step}</b><span class="hero-step-thumb-label"></span>
          </button>`;
        }).join('')}
      </div>

      <div class="hero-cinema-actions">
        <a class="btn primary hero-skip-to-presentation" href="#presentation"
           data-th="ไปยังเส้นทาง 12 ขั้นตอน ↓"
           data-en="Go to the 12-Step Journey ↓">
          ไปยังเส้นทาง 12 ขั้นตอน ↓
        </a>
      </div>

    </div>
  `;

  updateStaticText();
  loadHeroLanguageAssets();
  bindHeroPlayerControls();
  bindHeroStepNavigation();
  bindHeroThumbnailNavigation();
}

function bindHeroThumbnailNavigation(){
  document.querySelectorAll('.hero-step-thumb').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const step=btn.dataset.step;
      const cue=getHeroEffectiveStepCues().find(c=>c.step===step);
      if(!cue || !heroAudio) return;
      const wasPlaying=!heroAudio.paused && !heroAudio.ended;
      heroAudio.currentTime=cue.time;
      syncHeroToTime(cue.time,true);
      if(wasPlaying) heroAudio.play().catch(()=>{});
    });
  });
}

function loadHeroLanguageAssets() {
  const config = getHeroConfig();

  config.scenes.forEach((src, index) => {
    const img = document.getElementById(`heroSceneImage${index + 1}`);
    if (img) {
      img.src = src;
      if (typeof img.decode === 'function') img.decode().catch(() => {});
    }

    const preload = new Image();
    preload.src = src;
  });

  config.videos.forEach((src, index) => {
    const video = document.getElementById(`heroSceneVideo${index + 1}`);
    if (!video) return;

    video.pause();
    video.classList.remove('active');
    video.hidden = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.src = src;
    video.load();

    video.onloadedmetadata = () => {
      if (heroAudio) syncHeroSceneVideo(heroAudio.currentTime, true);
    };

    video.onended = () => {
      video.classList.remove('active');
    };
  });

  heroSceneIndex = 0;
  heroActiveStep = '01';
  renderHeroScene(0, true);
  renderHeroStepState('01', true);
  prepareHeroAudio();
}

function prepareHeroAudio() {
  stopHeroAudio();

  const config = getHeroConfig();
  heroAudio = new Audio(config.audio);
  heroAudio.preload = 'metadata';

  heroAudio.addEventListener('loadedmetadata', () => {
    const duration = Number.isFinite(heroAudio.duration) && heroAudio.duration > 0
      ? heroAudio.duration
      : HERO_NARRATION_TOTAL;

    const seek = document.getElementById('heroSeek');
    if (seek) seek.max = duration;

    const durationEl = document.getElementById('heroDuration');
    if (durationEl) durationEl.textContent = formatHeroTime(duration);

    syncHeroToTime(0, true);
  });

  heroAudio.addEventListener('play', () => {
    document.getElementById('heroCinema')?.classList.add('is-playing');
    updateHeroPlayerState();
    startHeroAnimationLoop();
  });

  heroAudio.addEventListener('pause', () => {
    document.getElementById('heroCinema')?.classList.remove('is-playing');
    updateHeroPlayerState();
    stopHeroAnimationLoop();
    if (!heroSeeking) syncHeroToTime(heroAudio.currentTime);
  });

  heroAudio.addEventListener('ended', () => {
    document.getElementById('heroCinema')?.classList.remove('is-playing');
    stopHeroAnimationLoop();
    syncHeroToTime(heroAudio.duration || HERO_NARRATION_TOTAL, true);
    document.getElementById('heroCinema')?.classList.add('journey-complete');
    updateHeroPlayerState();
  });

  heroAudio.addEventListener('seeked', () => {
    if (!heroSeeking) syncHeroToTime(heroAudio.currentTime, true);
  });
}

function startHeroAnimationLoop() {
  stopHeroAnimationLoop();

  const tick = () => {
    if (!heroAudio || heroAudio.paused || heroAudio.ended) return;
    if (!heroSeeking) syncHeroToTime(heroAudio.currentTime);
    heroRaf = requestAnimationFrame(tick);
  };

  heroRaf = requestAnimationFrame(tick);
}

function stopHeroAnimationLoop() {
  if (heroRaf) cancelAnimationFrame(heroRaf);
  heroRaf = 0;
}

function renderHeroScene(index, immediate = false) {
  const heroSceneEls = Array.from(document.querySelectorAll('.hero-scene-image'));
  if (!heroSceneEls.length) return;

  const nextIndex = Math.max(0, Math.min(heroSceneEls.length - 1, index));
  const nextScene = heroSceneEls[nextIndex];
  const currentScene = heroSceneEls[heroSceneIndex];

  if (!nextScene) return;

  /* First render / forced seek:
     show the requested scene directly without a transition flash. */
  if (immediate || !currentScene || nextIndex === heroSceneIndex) {
    heroSceneEls.forEach((scene, i) => {
      scene.classList.toggle('active', i === nextIndex);
      scene.classList.remove('scene-leaving', 'scene-entering');
      scene.style.zIndex = i === nextIndex ? '2' : '0';
    });
    heroSceneIndex = nextIndex;
    return;
  }

  /* Keep the old scene fully visible underneath.
     The new scene fades ON TOP of it.
     There is never a blank/white/black frame between scenes. */
  heroSceneEls.forEach(scene => {
    scene.classList.remove('scene-entering', 'scene-leaving');
  });

  currentScene.classList.add('active', 'scene-leaving');
  currentScene.style.zIndex = '1';

  nextScene.classList.add('active', 'scene-entering');
  nextScene.style.zIndex = '2';

  /* Force initial entering state to paint before starting transition. */
  void nextScene.offsetWidth;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextScene.classList.add('scene-entering-active');
    });
  });

  const cleanup = () => {
    currentScene.classList.remove('active', 'scene-leaving', 'scene-entering-active');
    currentScene.style.zIndex = '0';

    nextScene.classList.remove('scene-entering', 'scene-entering-active');
    nextScene.classList.add('active');
    nextScene.style.zIndex = '2';

    heroSceneIndex = nextIndex;
  };

  clearTimeout(nextScene._cinematicCleanup);
  nextScene._cinematicCleanup = setTimeout(cleanup, 980);
}

function getHeroSceneFromTime(seconds, cuts) {
  for (let i = cuts.length - 2; i >= 0; i -= 1) {
    if (seconds >= cuts[i]) return i;
  }
  return 0;
}

function getHeroStepFromTime(seconds, cues) {
  let active = cues[0]?.step || '01';
  for (const cue of cues) {
    if (seconds >= cue.time) active = cue.step;
    else break;
  }
  return active;
}


function renderHeroStepState(step, immediate = false) {
  const activeEl = document.getElementById('heroActiveStep');
  const cinema = document.getElementById('heroCinema');

  heroActiveStep = step;
  if (activeEl) activeEl.textContent = `STEP ${step}`;

  document.querySelectorAll('.hero-step-thumb').forEach((node, index) => {
    const nodeStep = node.dataset.step;
    node.classList.toggle('active', nodeStep === step);
    node.classList.toggle('reached', Number(nodeStep) < Number(step));
    node.setAttribute('aria-current', nodeStep === step ? 'step' : 'false');

    const label = node.querySelector('.hero-step-thumb-label');
    const item = steps[index];
    if (label && item) {
      label.textContent = (currentLang === 'en' ? item.en?.short : item.th?.short) || '';
    }
  });

  document.querySelectorAll('.hero-step-node').forEach(node => {
    const nodeStep = node.dataset.step;
    node.classList.toggle('active', nodeStep === step);
    node.classList.toggle('reached', Number(nodeStep) < Number(step));
    node.setAttribute('aria-current', nodeStep === step ? 'step' : 'false');
  });

  const progress = document.querySelector('.hero-step-progress');
  if (progress) {
    const pct = ((Number(step) - 1) / 11) * 100;
    progress.style.setProperty('--step-progress', `${pct}%`);
  }

  if (cinema) {
    cinema.dataset.activeStep = step;
    cinema.classList.toggle('journey-complete', step === '12' && heroAudio?.ended);
  }
}

function stopAllHeroSceneVideos(exceptIndex = -1) {
  document.querySelectorAll('.hero-scene-video').forEach((video, index) => {
    if (index === exceptIndex) return;
    video.pause();
    video.classList.remove('active');
    video.hidden = true;
  });
}

/* =========================================================
   HERO MEDIA REPLACEMENT — VIDEO <-> STILL
   Audio remains the master timeline.

   IMPORTANT:
   - Video and still are NEVER visible at the same time.
   - At the beginning of each scene, show only that scene's video.
   - When the video ends before the original audio scene cut,
     hide the video completely and show only the matching still.
   - If the audio scene cut arrives first, stop/hide the current
     video immediately and start the next scene.
   - Never loop, stretch, or slow a video.
   ========================================================= */
function syncHeroSceneVideo(seconds, force = false) {
  const sceneCuts = getHeroEffectiveSceneCuts();
  const sceneIndex = getHeroSceneFromTime(seconds, sceneCuts);
  const sceneStart = sceneCuts[sceneIndex] || 0;
  const elapsed = Math.max(0, seconds - sceneStart);

  const video = document.getElementById(`heroSceneVideo${sceneIndex + 1}`);
  const image = document.getElementById(`heroSceneImage${sceneIndex + 1}`);

  stopAllHeroSceneVideos(sceneIndex);

  /* Hide every non-current still. The existing renderHeroScene()
     still controls scene selection; this only enforces that video
     and still cannot overlap inside the current scene. */
  document.querySelectorAll('.hero-scene-image').forEach((img, index) => {
    if (index !== sceneIndex) {
      img.classList.remove('media-visible');
    }
  });

  if (!video || !image) return;

  const durationReady = Number.isFinite(video.duration) && video.duration > 0;

  /* Until video metadata is ready, use the still as a safe fallback.
     As soon as metadata loads, loadedmetadata calls this sync again. */
  if (!durationReady) {
    video.pause();
    video.classList.remove('active');
    video.hidden = true;

    image.classList.add('media-visible');
    return;
  }

  /* Video has finished inside this scene:
     remove it from display and replace it with the still image. */
  if (elapsed >= video.duration - 0.03) {
    video.pause();
    video.classList.remove('active');
    video.hidden = true;

    image.classList.add('media-visible');
    return;
  }

  /* Video is still inside its own duration:
     hide the still FIRST, then show the video.
     This guarantees there is no image/video overlay. */
  image.classList.remove('media-visible');

  video.hidden = false;
  video.classList.add('active');

  const drift = Math.abs((video.currentTime || 0) - elapsed);
  if (force || drift > 0.22) {
    try {
      video.currentTime = Math.min(
        Math.max(0, elapsed),
        Math.max(0, video.duration - 0.01)
      );
    } catch (_) {}
  }

  const audioIsPlaying = Boolean(
    heroAudio &&
    !heroAudio.paused &&
    !heroAudio.ended &&
    !heroSeeking
  );

  if (audioIsPlaying) {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        /* If the browser cannot play this media format,
           fall back cleanly to the still instead of overlaying. */
        video.pause();
        video.classList.remove('active');
        video.hidden = true;
        image.classList.add('media-visible');
      });
    }
  } else {
    video.pause();
  }
}

function syncHeroToTime(seconds, force = false) {
  const config = getHeroConfig();
  const duration =
    heroAudio && Number.isFinite(heroAudio.duration) && heroAudio.duration > 0
      ? heroAudio.duration
      : HERO_NARRATION_TOTAL;

  const current = Math.max(0, Math.min(seconds || 0, duration));
  const sceneCuts = getHeroEffectiveSceneCuts();
  const stepCues = getHeroEffectiveStepCues();

  const scene = getHeroSceneFromTime(current, sceneCuts);
  const step = getHeroStepFromTime(current, stepCues);

  renderHeroScene(scene, force);
  renderHeroStepState(step, force);
  syncHeroSceneVideo(current, force);

  const seek = document.getElementById('heroSeek');
  const currentEl = document.getElementById('heroCurrentTime');
  const durationEl = document.getElementById('heroDuration');

  if (seek && !heroSeeking) {
    seek.max = duration;
    seek.value = current;
    const pct = duration > 0 ? (current / duration) * 100 : 0;
    seek.style.setProperty('--seek-progress', `${pct}%`);
  }

  if (currentEl) currentEl.textContent = formatHeroTime(current);
  if (durationEl) durationEl.textContent = formatHeroTime(duration);
}

function updateHeroPlayerState() {
  const btn = document.getElementById('heroPlayPause');
  const icon = document.getElementById('heroPlayerIcon');
  if (!btn || !icon) return;

  const playing = heroAudio && !heroAudio.paused && !heroAudio.ended;
  icon.textContent = playing ? '❚❚' : '▶';
  btn.classList.toggle('playing', Boolean(playing));
  btn.setAttribute('aria-label', playing ? 'Pause animation' : 'Play animation');
}

function toggleHeroPlayback() {
  if (!heroAudio) prepareHeroAudio();
  if (!heroAudio) return;

  if (heroAudio.ended) {
    heroAudio.currentTime = 0;
    document.getElementById('heroCinema')?.classList.remove('journey-complete');
    syncHeroToTime(0, true);
  }

  if (heroAudio.paused) {
    heroAudio.play().catch(() => {});
  } else {
    heroAudio.pause();
  }
}

function getHeroCueForStep(step) {
  const cues = getHeroEffectiveStepCues();
  return cues.find(cue => cue.step === step) || cues[0];
}

function jumpHeroToStep(step) {
  const cue = getHeroCueForStep(step);
  if (!cue) return;

  if (!heroAudio) prepareHeroAudio();
  if (!heroAudio) return;

  const wasPlaying = !heroAudio.paused && !heroAudio.ended;
  const applyJump = () => {
    const duration = Number.isFinite(heroAudio.duration) && heroAudio.duration > 0
      ? heroAudio.duration
      : HERO_NARRATION_TOTAL;
    const target = Math.max(0, Math.min(cue.time, duration));

    document.getElementById('heroCinema')?.classList.remove('journey-complete');
    heroSeeking = false;
    heroAudio.currentTime = target;
    syncHeroToTime(target, true);

    if (wasPlaying) heroAudio.play().catch(() => {});
    else updateHeroPlayerState();
  };

  if (heroAudio.readyState >= 1) applyJump();
  else heroAudio.addEventListener('loadedmetadata', applyJump, { once: true });
}

function bindHeroStepNavigation() {
  document.querySelectorAll('.hero-step-node').forEach(node => {
    node.addEventListener('click', () => jumpHeroToStep(node.dataset.step));
  });
}

function bindHeroPlayerControls() {
  const play = document.getElementById('heroPlayPause');
  const seek = document.getElementById('heroSeek');

  play?.addEventListener('click', toggleHeroPlayback);

  seek?.addEventListener('pointerdown', () => {
    heroSeeking = true;
    heroWasPlayingBeforeSeek = Boolean(heroAudio && !heroAudio.paused);
    if (heroWasPlayingBeforeSeek) heroAudio.pause();
  });

  seek?.addEventListener('input', () => {
    const value = Number(seek.value);
    const max = Number(seek.max) || 1;
    const pct = (value / max) * 100;

    seek.style.setProperty('--seek-progress', `${pct}%`);
    syncHeroToTime(value, true);
  });

  const finishSeek = () => {
    if (!heroAudio || !seek) return;
    heroAudio.currentTime = Number(seek.value);
    heroSeeking = false;
    syncHeroToTime(heroAudio.currentTime, true);

    if (heroWasPlayingBeforeSeek) {
      heroAudio.play().catch(() => {});
    }
    heroWasPlayingBeforeSeek = false;
  };

  seek?.addEventListener('change', finishSeek);
  seek?.addEventListener('pointerup', finishSeek);
}

function stopHeroAudio() {
  stopHeroAnimationLoop();
  stopAllHeroSceneVideos();

  if (!heroAudio) return;
  heroAudio.pause();
  heroAudio.removeAttribute('src');
  heroAudio.load();
  heroAudio = null;
}

function restartHeroForLanguage() {
  if (!heroInitialized) return;

  document.getElementById('heroCinema')?.classList.remove('is-playing', 'journey-complete');
  loadHeroLanguageAssets();
  updateStaticText();

  const currentEl = document.getElementById('heroCurrentTime');
  if (currentEl) currentEl.textContent = '0:00';

  const seek = document.getElementById('heroSeek');
  if (seek) {
    seek.value = 0;
    seek.style.setProperty('--seek-progress', '0%');
  }

  updateHeroPlayerState();
}

function updateHeroLanguage() {
  restartHeroForLanguage();
}

function bindHeroAnimation() {
  if (heroInitialized) return;

  const stage = document.getElementById('heroAnimationStage');
  if (!stage) return;

  heroInitialized = true;
  buildHeroAnimation();
}


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

    bindDevelopmentViewer();

    bindHeroAnimation();


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

/* =========================================================
   PRESENTATION AUDIO MASTER CONTROLLER — 20 SEP 2026
   Requirements:
   - Opening Present attempts immediate playback
   - Button shows Pause while audio is playing, Play while paused
   - Timeline is driven by audio.currentTime and is seekable
   - TH/EN follows the current site language and switches audio source
   - Existing content/layout/scene timing remain untouched
   ========================================================= */
(() => {
  const TH_AUDIO = 'image/Sound-Hero/Sound-Hero-TH/Sound-Hero-TH.wav';
  const EN_AUDIO = 'image/Sound-Hero/Sound-Hero-EN/Sound-Hero-EN.wav';

  const qFirst = (...selectors) => {
    for (const s of selectors) {
      const el = document.querySelector(s);
      if (el) return el;
    }
    return null;
  };

  const getAudio = () =>
    document.getElementById('heroAudio') ||
    document.querySelector('#journey-animation audio') ||
    document.querySelector('.hero-cinema audio') ||
    document.querySelector('audio[data-hero-audio]');

  const getPlayButton = () =>
    document.getElementById('heroPlayBtn') ||
    document.getElementById('heroPlay') ||
    qFirst('[data-hero-play]', '.hero-play-btn', '.hero-player-play', '.presentation-play');

  const getTimeline = () =>
    document.getElementById('heroTimeline') ||
    qFirst('[data-hero-timeline]', '.hero-timeline input[type="range"]',
           '.hero-player input[type="range"]', 'input.hero-timeline');

  const getCurrentTimeEl = () =>
    document.getElementById('heroCurrentTime') ||
    qFirst('[data-hero-current]', '.hero-current-time');

  const getDurationEl = () =>
    document.getElementById('heroDuration') ||
    qFirst('[data-hero-duration]', '.hero-duration');

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const currentLanguage = () => {
    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    const bodyLang = (document.body?.dataset?.lang || '').toLowerCase();
    const active = document.querySelector(
      '[data-lang].active, [data-language].active, .lang-btn.active, .language-btn.active'
    );
    const activeLang = (
      active?.dataset?.lang ||
      active?.dataset?.language ||
      active?.getAttribute('lang') ||
      ''
    ).toLowerCase();

    const lang = activeLang || bodyLang || htmlLang;
    return lang.startsWith('en') ? 'en' : 'th';
  };

  const audioForLanguage = (lang) => lang === 'en' ? EN_AUDIO : TH_AUDIO;

  const updateButton = () => {
    const audio = getAudio();
    const btn = getPlayButton();
    if (!audio || !btn) return;

    const playing = !audio.paused && !audio.ended;
    const lang = currentLanguage();

    btn.dataset.state = playing ? 'pause' : 'play';
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    btn.setAttribute(
      'aria-label',
      playing
        ? (lang === 'en' ? 'Pause presentation' : 'หยุดการนำเสนอชั่วคราว')
        : (lang === 'en' ? 'Play presentation' : 'เล่นการนำเสนอ')
    );

    /* Keep icon + text readable in both TH/EN. */
    btn.textContent = playing
      ? (lang === 'en' ? '❚❚ Pause' : '❚❚ หยุดชั่วคราว')
      : (lang === 'en' ? '▶ Play' : '▶ เล่น');
  };

  const updateTimeline = () => {
    const audio = getAudio();
    const timeline = getTimeline();
    if (!audio) return;

    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;

    if (timeline && !timeline.matches(':active')) {
      timeline.min = '0';
      timeline.max = String(duration || 0);
      timeline.step = '0.01';
      timeline.value = String(Math.min(current, duration || current));
      const pct = duration > 0 ? (current / duration) * 100 : 0;
      timeline.style.setProperty('--hero-progress', `${pct}%`);
      timeline.setAttribute('aria-valuemin', '0');
      timeline.setAttribute('aria-valuemax', String(duration || 0));
      timeline.setAttribute('aria-valuenow', String(current));
    }

    const currentEl = getCurrentTimeEl();
    const durationEl = getDurationEl();
    if (currentEl) currentEl.textContent = formatTime(current);
    if (durationEl) durationEl.textContent = formatTime(duration);
  };

  const bindAudio = () => {
    const audio = getAudio();
    if (!audio || audio.dataset.masterBound === '1') return;
    audio.dataset.masterBound = '1';

    ['play', 'pause', 'ended', 'loadedmetadata', 'durationchange', 'timeupdate', 'seeked']
      .forEach(evt => audio.addEventListener(evt, () => {
        updateButton();
        updateTimeline();
      }));

    updateButton();
    updateTimeline();
  };

  const bindControls = () => {
    bindAudio();

    const btn = getPlayButton();
    if (btn && btn.dataset.masterBound !== '1') {
      btn.dataset.masterBound = '1';
      /* Capture phase prevents an older click handler from toggling twice. */
      btn.addEventListener('click', (event) => {
        const audio = getAudio();
        if (!audio) return;
        event.preventDefault();
        event.stopImmediatePropagation();

        if (audio.paused || audio.ended) {
          if (audio.ended) audio.currentTime = 0;
          audio.play().catch(() => updateButton());
        } else {
          audio.pause();
        }
      }, true);
    }

    const timeline = getTimeline();
    if (timeline && timeline.dataset.masterBound !== '1') {
      timeline.dataset.masterBound = '1';

      const seek = () => {
        const audio = getAudio();
        if (!audio || !Number.isFinite(audio.duration)) return;
        const next = Math.max(0, Math.min(audio.duration, Number(timeline.value) || 0));
        audio.currentTime = next;
        updateTimeline();

        /* Existing hero sync uses audio time; dispatching timeupdate keeps
           Scene/Step state synchronized after a manual seek. */
        audio.dispatchEvent(new Event('timeupdate'));
      };

      timeline.addEventListener('input', seek);
      timeline.addEventListener('change', seek);
    }
  };

  const switchLanguage = (lang, preservePlayback = true) => {
    const audio = getAudio();
    if (!audio) return;

    const desired = audioForLanguage(lang);
    const currentSrc = audio.getAttribute('src') || '';
    if (currentSrc.endsWith(desired)) {
      updateButton();
      return;
    }

    const wasPlaying = preservePlayback && !audio.paused && !audio.ended;
    const oldDuration = Number.isFinite(audio.duration) ? audio.duration : 0;
    const oldTime = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    const ratio = oldDuration > 0 ? oldTime / oldDuration : 0;

    audio.src = desired;
    audio.load();

    const resume = () => {
      const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
      if (duration > 0 && ratio > 0) {
        audio.currentTime = Math.min(duration - 0.05, duration * ratio);
      }
      updateTimeline();
      updateButton();
      if (wasPlaying) audio.play().catch(() => updateButton());
    };

    audio.addEventListener('loadedmetadata', resume, { once: true });
  };

  const tryAutoPlayPresentation = () => {
    bindControls();
    const audio = getAudio();
    if (!audio) return;

    switchLanguage(currentLanguage(), false);

    /* Called from the user's Present/Open click whenever possible.
       If a browser blocks sound autoplay, the button remains Play. */
    audio.play().then(() => {
      updateButton();
      updateTimeline();
    }).catch(() => {
      updateButton();
      updateTimeline();
    });
  };

  /* Any explicit language control keeps audio matched to the site language. */
  document.addEventListener('click', (event) => {
    const langControl = event.target.closest(
      '[data-lang], [data-language], .lang-btn, .language-btn, [lang="th"], [lang="en"]'
    );
    if (langControl) {
      requestAnimationFrame(() => switchLanguage(currentLanguage(), true));
      return;
    }

    /* Opening Present: start audio immediately from this user gesture. */
    const opener = event.target.closest(
      '[data-open-presentation], [data-present-open], .presentation-open, .present-btn, .btn-present'
    );
    if (opener) {
      requestAnimationFrame(tryAutoPlayPresentation);
    }
  }, true);

  /* Observe class/lang changes too, for existing TH/EN switch implementations. */
  const observer = new MutationObserver(() => {
    bindControls();
    switchLanguage(currentLanguage(), true);
  });

  const start = () => {
    bindControls();
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'class'],
      subtree: true
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  /* Public hook for the existing Present modal code:
     call window.startBITPresentation() at the end of its open function.
     This also lets current code start playback without changing scene logic. */
  window.startBITPresentation = tryAutoPlayPresentation;
})();


/* =========================================================
   HERO AUDIO MASTER CONTROLLER — 20 SEP 2026
   Scope: #journey-animation ONLY
   Present modal remains independent.
   ========================================================= */
(() => {
  const heroRoot = document.getElementById('journey-animation');
  if (!heroRoot) return;

  const TH_SRC = 'image/Sound-Hero/Sound-Hero-TH/Sound-Hero-TH.wav';
  const EN_SRC = 'image/Sound-Hero/Sound-Hero-EN/Sound-Hero-EN.wav';

  const heroAudioEl =
    heroRoot.querySelector('#heroAudio') ||
    heroRoot.querySelector('audio') ||
    document.getElementById('heroAudio');

  const heroPlayEl =
    heroRoot.querySelector('#heroPlayBtn') ||
    heroRoot.querySelector('#heroPlay') ||
    heroRoot.querySelector('[data-hero-play]') ||
    heroRoot.querySelector('.hero-play-btn') ||
    heroRoot.querySelector('.hero-player-play');

  const heroRangeEl =
    heroRoot.querySelector('#heroTimeline') ||
    heroRoot.querySelector('[data-hero-timeline]') ||
    heroRoot.querySelector('input[type="range"]');

  const heroCurrentEl =
    heroRoot.querySelector('#heroCurrentTime') ||
    heroRoot.querySelector('[data-hero-current]') ||
    heroRoot.querySelector('.hero-current-time');

  const heroDurationEl =
    heroRoot.querySelector('#heroDuration') ||
    heroRoot.querySelector('[data-hero-duration]') ||
    heroRoot.querySelector('.hero-duration');

  if (!heroAudioEl) return;

  const fmt = (sec) => {
    sec = Number.isFinite(sec) && sec >= 0 ? sec : 0;
    return `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;
  };

  const getLang = () => {
    const active = document.querySelector(
      '[data-lang].active, [data-language].active, .lang-btn.active, .language-btn.active'
    );
    const raw = (
      active?.dataset?.lang ||
      active?.dataset?.language ||
      document.body?.dataset?.lang ||
      document.documentElement.lang ||
      'th'
    ).toLowerCase();
    return raw.startsWith('en') ? 'en' : 'th';
  };

  const srcFor = (lang) => lang === 'en' ? EN_SRC : TH_SRC;

  const updateHeroButton = () => {
    if (!heroPlayEl) return;
    const playing = !heroAudioEl.paused && !heroAudioEl.ended;
    const lang = getLang();

    heroPlayEl.dataset.state = playing ? 'pause' : 'play';
    heroPlayEl.setAttribute('aria-pressed', playing ? 'true' : 'false');
    heroPlayEl.setAttribute(
      'aria-label',
      playing
        ? (lang === 'en' ? 'Pause animation' : 'หยุดแอนิเมชันชั่วคราว')
        : (lang === 'en' ? 'Play animation' : 'เล่นแอนิเมชัน')
    );

    /* Hero player keeps the compact control style. */
    heroPlayEl.textContent = playing
      ? (lang === 'en' ? '❚❚ Pause' : '❚❚ หยุดชั่วคราว')
      : (lang === 'en' ? '▶ Play' : '▶ เล่น');
  };

  let heroUserSeeking = false;

  const updateHeroTimeline = () => {
    const duration = Number.isFinite(heroAudioEl.duration) ? heroAudioEl.duration : 0;
    const current = Number.isFinite(heroAudioEl.currentTime) ? heroAudioEl.currentTime : 0;

    if (heroRangeEl && !heroUserSeeking) {
      heroRangeEl.min = '0';
      heroRangeEl.max = String(duration || 0);
      heroRangeEl.step = '0.01';
      heroRangeEl.value = String(Math.min(current, duration || current));
      const pct = duration > 0 ? (current / duration) * 100 : 0;
      heroRangeEl.style.setProperty('--hero-progress', `${pct}%`);
      heroRangeEl.setAttribute('aria-valuenow', String(current));
      heroRangeEl.setAttribute('aria-valuemax', String(duration || 0));
    }

    if (heroCurrentEl) heroCurrentEl.textContent = fmt(current);
    if (heroDurationEl) heroDurationEl.textContent = fmt(duration);
  };

  const syncExistingHero = () => {
    /* Reuse the project's existing scene/step sync if available. */
    try {
      if (typeof syncHeroToTime === 'function') {
        syncHeroToTime(heroAudioEl.currentTime, false);
      }
    } catch (_) {}
  };

  const refresh = () => {
    updateHeroButton();
    updateHeroTimeline();
    syncExistingHero();
  };

  ['play','pause','ended','loadedmetadata','durationchange','timeupdate','seeked']
    .forEach(evt => heroAudioEl.addEventListener(evt, refresh));

  if (heroPlayEl) {
    /* Replace older double-toggle behavior at capture phase. */
    heroPlayEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (heroAudioEl.paused || heroAudioEl.ended) {
        if (heroAudioEl.ended) heroAudioEl.currentTime = 0;
        heroAudioEl.play().catch(refresh);
      } else {
        heroAudioEl.pause();
      }
    }, true);
  }

  if (heroRangeEl) {
    const seek = () => {
      if (!Number.isFinite(heroAudioEl.duration)) return;
      const t = Math.max(0, Math.min(heroAudioEl.duration, Number(heroRangeEl.value) || 0));
      heroAudioEl.currentTime = t;
      updateHeroTimeline();
      syncExistingHero();
    };

    heroRangeEl.addEventListener('pointerdown', () => { heroUserSeeking = true; });
    heroRangeEl.addEventListener('input', seek);
    heroRangeEl.addEventListener('change', () => {
      seek();
      heroUserSeeking = false;
      updateHeroTimeline();
    });
    heroRangeEl.addEventListener('pointerup', () => {
      heroUserSeeking = false;
      updateHeroTimeline();
    });
  }

  const switchHeroLanguage = (lang) => {
    const wanted = srcFor(lang);
    const current = heroAudioEl.getAttribute('src') || '';

    if (current.endsWith(wanted)) {
      updateHeroButton();
      return;
    }

    const wasPlaying = !heroAudioEl.paused && !heroAudioEl.ended;
    const oldDuration = Number.isFinite(heroAudioEl.duration) ? heroAudioEl.duration : 0;
    const oldTime = Number.isFinite(heroAudioEl.currentTime) ? heroAudioEl.currentTime : 0;
    const ratio = oldDuration > 0 ? oldTime / oldDuration : 0;

    heroAudioEl.src = wanted;
    heroAudioEl.load();

    heroAudioEl.addEventListener('loadedmetadata', () => {
      if (heroAudioEl.duration > 0 && ratio > 0) {
        heroAudioEl.currentTime = Math.min(
          heroAudioEl.duration - 0.05,
          heroAudioEl.duration * ratio
        );
      }
      refresh();
      if (wasPlaying) heroAudioEl.play().catch(refresh);
    }, { once: true });
  };

  /* Language controls: Hero follows TH/EN independently of Present modal. */
  document.addEventListener('click', (event) => {
    const langBtn = event.target.closest(
      '[data-lang], [data-language], .lang-btn, .language-btn, [lang="th"], [lang="en"]'
    );
    if (!langBtn) return;
    requestAnimationFrame(() => switchHeroLanguage(getLang()));
  }, true);

  /* Also follow programmatic language changes. */
  const langObserver = new MutationObserver(() => {
    switchHeroLanguage(getLang());
  });
  langObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang', 'class'],
    subtree: true
  });

  /* Initialize Hero only. Do NOT autoplay Hero merely because Present opens. */
  switchHeroLanguage(getLang());
  refresh();
})();

/* =========================================================
   INITIAL PAGE POSITION FIX — 20 SEP 2026
   Fresh open / refresh starts at the Header, not Hero Animation.
   This intentionally runs only during initial page restoration.
   ========================================================= */
(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  let initialPositionLocked = true;

  const forceInitialTop = () => {
    if (!initialPositionLocked) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  forceInitialTop();

  document.addEventListener('DOMContentLoaded', forceInitialTop, { once: true });

  window.addEventListener('load', () => {
    forceInitialTop();

    /* Release after layout, fonts and media have had time to settle. */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        forceInitialTop();
        initialPositionLocked = false;
      });
    });
  }, { once: true });

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  });
})();